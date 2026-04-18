const itemList = document.getElementById("item-list");
const currentOrderContainer = document.getElementById("current-order");
const placeOrderButton = document.getElementById("order-button");
const confirmPopUp = document.querySelector(".confirmation-box-container");
const closePopUpButton = document.querySelector(".confirmation-box-container button")
// "add to order" buttons
addButtons = document.querySelectorAll('.add');

function addToOrder(itemName) {
    // creates list item to append to the <ul> already in the HTML
    const itemContainer = document.createElement("li");

    // each new <li> needs to contain 1. the name of the menu item 2. a button to remove it
    const itemNameDisplay = document.createTextNode(itemName);
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => {
        // deletes the button's parent <li>
        itemContainer.remove();
        // hides the current order section again if removing this item makes it empty
        if (itemList.childElementCount === 0) {
            currentOrderContainer.classList.add("hidden");
        }
    });

    // add the text and button as children within the larger <li>
    itemContainer.appendChild(removeButton);
    itemContainer.appendChild(itemNameDisplay);

    // add the <li> to its parent
    itemList.appendChild(itemContainer);
};

addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // gets the text from the h4 element immediately before the clicked button
        addToOrder(button.previousElementSibling.innerHTML);
        // makes sure the current order section is visible
        currentOrderContainer.classList.remove("hidden");
    });
});

// clear current order and show confirmation pop up
placeOrderButton.addEventListener("click", () => {
    itemList.innerHTML = null;
    currentOrderContainer.classList.add("hidden");
    confirmPopUp.classList.remove("hidden");
});

// close pop up
closePopUpButton.addEventListener("click", () => {
    confirmPopUp.classList.add("hidden");
});