// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-from");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);
//clear all items
clearBtn.addEventListener("click", clearItems);
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);

    element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;

    //append list
    list.appendChild(element);
    displayAlert("Item added to the list", "success");
    container.classList.add("show-container");

    //add to localstorage
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("vaule is not null and edit flag is true");
  } else {
    displayAlert("Please enter value", "danger");
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
    container.classList.remove("show-container");
    displayAlert("empty alert", "danger");

    setBackToDefault();
    // remove the list from local storage
  }
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  console.log("storing to the local file");
}

function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// ****** SETUP ITEMS **********
