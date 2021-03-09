// Setting the current date and time in the header bar
var date = moment().format("MMMM Do YYYY, HH:mm");

// Open Planner, display today's date
var $currentDay = document.getElementById("currentDay");
$currentDay.textContent = date;

// In case I want the seconds later for my last refresh
console.log(moment().format("MMMM Do YYYY, HH:mm:ss"));

// Define description class
var description = document.getElementsByClassName(".description");

// Define $timeBlock
var $timeBlock = document.getElementsByClassName(".time-block");

// Save button -> Store the Time + Description in localStorage
$(".saveBtn").on("click", function (e) {
  // No refreshy
  e.preventDefault();
  // Set time as this button's parent div id's contents which is named after the hour
  var time = $(this).parent().attr("id");
  // Set description as this button's sibling div class's contents
  var description = $(this).siblings(".description").val();
  // Make string of text
  JSON.stringify(localStorage.setItem(time, description));
});

//  Make it so, Number 1!
renderDescription();

function renderDescription() {
  // Timeblocks 07:00 - 17:00 Pull from localStorage and show
  $("#hour-0700 textarea").val(localStorage.getItem("hour-0700"));
  $("#hour-0800 textarea").val(localStorage.getItem("hour-0800"));
  $("#hour-0900 textarea").val(localStorage.getItem("hour-0900"));
  $("#hour-1000 textarea").val(localStorage.getItem("hour-1000"));
  $("#hour-1100 textarea").val(localStorage.getItem("hour-1100"));
  $("#hour-1200 textarea").val(localStorage.getItem("hour-1200"));
  $("#hour-1300 textarea").val(localStorage.getItem("hour-1300"));
  $("#hour-1400 textarea").val(localStorage.getItem("hour-1400"));
  $("#hour-1500 textarea").val(localStorage.getItem("hour-1500"));
  $("#hour-1600 textarea").val(localStorage.getItem("hour-1600"));
  $("#hour-1700 textarea").val(localStorage.getItem("hour-1700"));
}

// Time Check function to change colours

function whatTimeIsIt(){
    // Run this loop on all divs with the class "description"
    $(".description").each(function(){
        // Pulling the Hour from each id name
        var timeSlotHour = $(this).parent().attr("id").split("-")[1];
        console.log(timeSlotHour);

        // Pulling Current Time
        var currentHour = moment().format("HH"+"00");
        console.log(currentHour);
        
        // set var to change color depending on the hour of day
        if (parseInt(currentHour) > parseInt(timeSlotHour)){
            $(this).parent().addClass("past");
            }
            else if (currentHour === timeSlotHour) {
                $(this).parent().addClass("present");
            } else {
                $(this).parent().addClass("future");
            }
        }
    );
}
    whatTimeIsIt();