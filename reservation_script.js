const submitButton = document.getElementById("reservation-button");
const confirmPopUp = document.querySelector(".confirmation-box-container");
const closePopUpButton = document.querySelector(".confirmation-box-container button");
const inputFields = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

submitButton.addEventListener("click", () => {
    // clear inputs
    inputFields.forEach((input) => {input.value = null;});
    textArea.value = null;
    // show confirmation pop up
    confirmPopUp.classList.remove("hidden");
});

// close pop up
closePopUpButton.addEventListener("click", () => {
    confirmPopUp.classList.add("hidden");
});