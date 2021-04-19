var todoInput = document.querySelector("#todo-name");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var dateInputEl = document.querySelector("#datepicker");

var todos = [];

// This function reprints the todo list to the wepage
function renderTodos() {
  // Clear todoList
  todoList.innerHTML = "";

  // Append each todo and print to webpage
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo + "  ";
    li.setAttribute("data-index", i);

    // Add button element that allows clearing of the todo from the list
    var button = document.createElement("button");
    button.textContent = "Complete ✔️";
    //button.style.justifyContent = "flex-end"; this is not working

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  renderTodos();
}

function storeTodos() {
  // Set to local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Processes addition of todo item
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();
  var todoDate = dateInputEl.value;
  todoText = todoText.concat(' on ', todoDate);

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add next todo to array
  todos.push(todoText);  
  // Resets form 
  dateInputEl.value = "";
  todoInput.value = "";

  storeTodos();
  renderTodos();
});

// Processes clearing of a todo element with Complete button
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Retrieves element index and removes that element from the array
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    storeTodos();
    renderTodos();
  }
});

// Autocomplete widget
$(function () {
  var todoNames = [
    'Revise',
    'Homework',
    'Group Meeting',
    'Group Assignment',
    'Watch Video',
    'Office Hours',
  ];
  $('#todo-name').autocomplete({
    source: todoNames,
  });
});

// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

// Intialises page and renders list
init()