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
//Load content
window.addEventListener('DOMContentLoaded', setupItems)
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  
  if (value && !editFlag) {

    createListItems(id, value); 
    displayAlert("Item added to the list", "success");
    container.classList.add("show-container");

    //add to local storage
    addToLocalStorage(id, value);
    setBackToDefault();

  } 
  else if (value && editFlag) {
    editElement.innerHTML = grocery.value;
    displayAlert('Item Edited', 'success');
    editItemInLocalStorage(editID, value);
    setBackToDefault();
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

//delete item 
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("Deleting Item", "danger");
  setBackToDefault();
  removeFromLocalStorage(id);
};

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit" 
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
    localStorage.removeItem('list');
  }
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  const grocery = { id, value }
  let items = getLocalStorage();
      console.log(items);
  items.push(grocery);
  
  localStorage.setItem('list', JSON.stringify(items))
}
//Remove from local storage
function removeFromLocalStorage(id) {
  let items = getLocalStorage(); 
  items = items.filter(item => item.id !== id);
  localStorage.setItem('list', JSON.stringify(items))
}
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// ****** SETUP ITEMS **********
function editItemInLocalStorage(id, value) {
  let items = getLocalStorage(); 
  items = items.map(item => {
    if(item.id === id) {
      item.value = value;
    };
    return item; 
  })
  localStorage.setItem('list', JSON.stringify(items))

};
function getLocalStorage () {
  return localStorage.getItem('list') ?
  JSON.parse(localStorage.getItem('list')) 
  : [];
}
//setup Items 
function setupItems() {
  let items = getLocalStorage();
  if(items.length > 0){
   items.forEach(item => createListItems(item.id, item.value))
  }
  container.classList.add('show-container');
};

function createListItems(id, value){
  const element = document.createElement("article");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>`;

  const deleteBtn = element.querySelector('.delete-btn');
  const editBtn = element.querySelector('.edit-btn');
  deleteBtn.addEventListener('click', deleteItem)
  editBtn.addEventListener('click', editItem);
  //append list
  list.appendChild(element);
};