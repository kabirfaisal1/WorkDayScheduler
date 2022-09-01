var descriptionEl = document.querySelector(".description");
// Global variables
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var timeNow = moment().hour();// Get current hour number

// Time display using Moment.js
//$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function() {
  $('#currentDay').datepicker();
  $('#currentDay').datepicker('setDate', '12/31/2023');
});

//$("#currentDay").text(datepicker().format("dddd, MMMM Do"));

$(document).ready(function () {
  saveBtn.on("click", function () {
    // Getting values of content on textarea and time on div
    var text = $(this).siblings(descriptionEl).val().trim();
    console.log(text);
    var time = $(this).parent().attr("id");
    // Save to local storage
    localStorage.setItem(time, text);
  });
  

  // Coloring time block based on time in comparison to current time
  function colorBlocks() {
    // Use the each() method to loop over blocks, parsing integer on id name and removing hour text with split
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour);

      // Check time and add/remove classes for background colors
      if (blockHour < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockHour === timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
    });
  }

  // Getting data from local storage if it exists
  $("#hour830" + "descriptionEl").val(localStorage.getItem("hour830"));
  $("#hour9" + "descriptionEl").val(localStorage.getItem("hour9"));
  $("#hour930" + "descriptionEl").val(localStorage.getItem("hour930"));
  $("#hour10" + "descriptionEl").val(localStorage.getItem("hour10"));
  $("#hour1030" + "descriptionEl").val(localStorage.getItem("hour1030"));
  $("#hour11" + "descriptionEl").val(localStorage.getItem("hour11"));
  $("#hour1130" + "descriptionEl").val(localStorage.getItem("hour1130"));
  $("#hour12" + "descriptionEl").val(localStorage.getItem("hour12"));
  $("#hour1230" + "descriptionEl").val(localStorage.getItem("hour1230"));
  $("#hour13" + "descriptionEl").val(localStorage.getItem("hour13"));
  $("#hour1330" + "descriptionEl").val(localStorage.getItem("hour1330"));
  $("#hour14" + "descriptionEl").val(localStorage.getItem("hour14"));
  $("#hour1430" + "descriptionEl").val(localStorage.getItem("hour1430"));
  $("#hour15" + "descriptionEl").val(localStorage.getItem("hour15"));
  $("#hour1530" + "descriptionEl").val(localStorage.getItem("hour1530"));
  $("#hour16" + "descriptionEl").val(localStorage.getItem("hour16"));
  $("#hour1630" + "descriptionEl").val(localStorage.getItem("hour1630"));
  $("#hour17" + "descriptionEl").val(localStorage.getItem("hour17"));
  $("#hour18" + "descriptionEl").val(localStorage.getItem("hour18"));

  colorBlocks();
});
