window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  const formSubmitButton = document.querySelector(".formSubmitButton");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    formSubmitButton.innerText = "Sending";
    formSubmitButton.setAttribute("disabled", "disabled");
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Konfirmasi kerhadiran berhasil terkirim!");
      formSubmitButton.innerText = "Sent";
      fetchAndRenderSheetData();
    });
  });
});
