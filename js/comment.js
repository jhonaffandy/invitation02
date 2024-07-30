// URL of your published Google Sheets CSV (replace with your actual published URL)
const sheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR70h0rrqxhyxTn12dBPCgJGeBntxJKzEhBiGbK3wLc8gogU8KT_oNBmCCaRZZrqKGDGgJ0tR0jW1Ec/pub?output=csv";
const commentsPerPage = 10; // Number of comments per page
let currentPage = 1; // Current page number
let commentsData = []; // Array to store comments data
const maxPagesToShow = 5; // Maximum number of pagination buttons to show

// Function to fetch data from Google Sheets and render on webpage
async function fetchAndRenderSheetData() {
  try {
    const response = await fetch(sheetUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.text();

    // Convert CSV data to JSON
    const jsonArray = csvToJson(data);
    commentsData = jsonArray.reverse();
    // console.log(jsonArray);
    // new render with pagination
    renderComments(currentPage);
    renderPagination();
  } catch (error) {
    console.error("Error fetching or parsing data:", error.message);
  }
}

// Function to convert CSV data to JSON format
function csvToJson(csv) {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentLine = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      const header = headers[j].trim().replace(/^"(.*)"$/, "$1");
      const value = currentLine[j]
        ? currentLine[j].trim().replace(/^"(.*)"$/, "$1")
        : ""; // Handle empty cells gracefully
      obj[header] = value;
    }

    result.push(obj);
  }

  return result;
}

// Function to render comments for a specific page
function renderComments(page) {
  const startIndex = (page - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  const commentsList = document.getElementById("comments-list");
  commentsList.innerHTML = ""; // Clear previous comments

  for (let i = startIndex; i < endIndex && i < commentsData.length; i++) {
    const comment = commentsData[i];
    const commentElement = document.createElement("div");
    commentElement.classList.add("row");
    commentElement.classList.add("comment-row");
    commentElement.innerHTML = `
      <h3>${comment.nama}: <span class="badge btn ${
      comment.status == "HADIR" ? "btn-success" : "btn-warning"
    }">${comment.status}</span></h3>
    <hr>  
    <h4>${comment.pesan}</h4>
      `;
    commentsList.appendChild(commentElement);
  }
}
// Function to render pagination controls
function renderPagination() {
  const totalPages = Math.ceil(commentsData.length / commentsPerPage);
  const paginationControls = document.getElementById("pagination-controls");
  paginationControls.innerHTML = ""; // Clear previous pagination controls

  const maxPages = Math.min(totalPages, maxPagesToShow); // Limit the number of pages to show
  // console.log(maxPages, totalPages, maxPagesToShow);
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      currentPage = i;
      renderComments(currentPage);
    });
    paginationControls.appendChild(button);
  }

  // Optionally add a "Next" button
  if (totalPages > maxPages) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", () => {
      currentPage++;
      if (currentPage > totalPages) {
        currentPage = totalPages;
      }
      renderComments(currentPage);
    });
    paginationControls.appendChild(nextButton);
  }
}

// Fetch and render sheet data on page load
fetchAndRenderSheetData();
