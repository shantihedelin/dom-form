const formEl = document.getElementById("form");
const sendBtnEl = document.getElementById("sendBtn");
const nameFieldEl = document.getElementById("nameField");
const emailFieldEl = document.getElementById("emailField");
const textFieldEl = document.getElementById("textField");

const errorMessageEl = document.createElement("div");
errorMessageEl.classList.add("error-message");
errorMessageEl.textContent = "";

// Skapa en HTML-sida med ett formulär som innehåller fält för namn, e-postadress och ett meddelande.
// Använd JavaScript för att validera att alla fält är ifyllda innan formuläret skickas.
// Om något fält inte är ifyllt, ska ett meddelande visas under det aktuella fältet som förklarar vad som behöver fyllas i.

form.addEventListener("submit", function (event) {
  // Remove error message
  errorMessageEl.remove();

  if ((nameFieldEl.value = "")) {
    errorMessageEl = "You must fill in your name!";
    nameFieldEl.appendChild(errorMessageEl);
  }

  if ((nameFieldEl.value = "")) {
    errorMessageEl = "You must fill in your name!";
    nameFieldEl.appendChild(errorMessageEl);
  }
  if ((nameFieldEl.value = "")) {
    errorMessageEl = "You must fill in your name!";
    nameFieldEl.appendChild(errorMessageEl);
  } else err;
  console.log("Error", error);

  // Rensa inputfälten
  nameFieldEl.value = "";
  emailFieldEl.value = "";
  textFieldEl.value = "";
});
