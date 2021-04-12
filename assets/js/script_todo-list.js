var formEl = $('#todo-form');
var nameInputEl = $('#todo-name');
var dateInputEl = $('#datepicker');
var todoListEl = $('#todo-list');

var printTodos = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(todoListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printTodos(nameInput, dateInput);

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