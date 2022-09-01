var saveBtnEl = $(".saveBtn");
var timeBlockEl = ".time-block";
var timeBoxDescriptionEl = ".description";
var idAttributes = "id";
var currentTime = moment().hour();// Get current hour number
var timeSpans = {
  future: "future",
  present: "present",
  past: "past"
}

$("#todayDate").text(moment().format("dddd, MMMM Do"));

$(document).ready(function () {
  saveBtnEl.on("click", function () {
    // Getting values of content on textarea and time on div
    var userInput = $(this).siblings(timeBoxDescriptionEl).val().trim();
    var time = $(this).parent().attr(idAttributes);
    // Save to local storage
    localStorage.setItem(time, userInput);
  });

  // Coloring time block based on time in comparison to current time
  function timeColorSort() {
    // Use the each() method to loop over blocks, parsing integer on id name and removing hour text with split
    $(timeBlockEl).each(function () {
      var eachHourBlocks = parseInt($(this).attr(idAttributes).split("hour")[1]);
      // Check time and add/remove classes for background colors
      if (eachHourBlocks < currentTime) {
        $(this).removeClass(timeSpans.future);
        $(this).removeClass(timeSpans.present);
        $(this).addClass(timeSpans.past);
      } else if (eachHourBlocks === currentTime) {
        $(this).removeClass(timeSpans.past);
        $(this).removeClass(timeSpans.future);
        $(this).addClass(timeSpans.present);
      } else {
        $(this).removeClass(timeSpans.present);
        $(this).removeClass(timeSpans.past);
        $(this).addClass(timeSpans.future);
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