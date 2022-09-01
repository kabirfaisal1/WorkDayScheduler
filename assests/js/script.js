var saveBtn = $(".saveBtn");
var currentTime = moment().hour();// Get current hour number

$("#todayDate").text(moment().format("dddd, MMMM Do"));

$(document).ready(function () {
  saveBtn.on("click", function () {
    // Getting values of content on textarea and time on div
    var userInput = $(this).siblings(".description").val().trim();
    var time = $(this).parent().attr("id");
    // Save to local storage
    localStorage.setItem(time, userInput);
  });
  
  // Coloring time block based on time in comparison to current time
  function timeColorSort() {
    // Use the each() method to loop over blocks, parsing integer on id name and removing hour text with split
    $(".time-block").each(function () {
      var eachHourBlocks = parseInt($(this).attr("id").split("hour")[1]);
         // Check time and add/remove classes for background colors
    if (eachHourBlocks < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (eachHourBlocks === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  
    });
  }
  getSchduleData();
  timeColorSort();
});


function getSchduleData() {
  // Getting data from local storage if it exists and displaying on the time blocks
  $("#hour08 .description").val(localStorage.getItem("hour08"));
  $("#hour09 .description").val(localStorage.getItem("hour09"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  $("#hour18 .description").val(localStorage.getItem("hour18"));
}