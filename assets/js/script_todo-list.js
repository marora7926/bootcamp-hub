var formEl = $('#todo-form');
var nameInputEl = $('#todo-name');
var dateInputEl = $('#datepicker');
var todoListEl = $('#todo-list');

var printTodos = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
    // add delete button to remove shopping list item
    listEl.append(
        '<button class="btn btn-danger btn-small delete-item-btn float-right">Remove</button>'
      );
  listEl.appendTo(todoListEl);
};

function handleRemoveItem(event) {
    // convert button we pressed (`event.target`) to a jQuery DOM object
    var btnClicked = $(event.target);
  
    // get the parent `<li>` element from the button we pressed and remove it
    btnClicked.parent('li').remove();
  }
  
  // use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
  todoListEl.on('click', '.delete-item-btn', handleRemoveItem);
  //formEl.on('submit', handleFormSubmit);

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printTodos(nameInput, dateInput);


  //currTodos.name[i], currTodos.date[i]

  // resets form
  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

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

/*
var currTodos = localStorage.getItem("localList");
for (var i=0; i< currTodos.length; i++){
    printTodos(currTodos.name[i], currTodos.date[i]);
}
*/
//printTodos(nameInput, dateInput);