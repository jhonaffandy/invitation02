const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("to") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";

const namaContainer = document.querySelector(".hero h4.guestPerson span");
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ",");
document.querySelector("#nama").value = nama;
