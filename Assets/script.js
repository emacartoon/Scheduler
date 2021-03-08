var date = moment().format("dddd, MMMM Do YYYY, HHmm");
var currentDay = document.getElementById("currentDay"); currentDay.textContent=date;

var $timeBlock = $("#time-block");
var time = [$(".hour").text()];
console.log(time);
var hour = parseInt[time];
for (let i = 0; i < 11; i++) {
    $timeBlock.append(buildTimeBlock)
}

// Open Planner, display today's date

// Generate timeblocks 7:00 - 17:00

// set var to change color depending on the hour of day
var currentHour = (moment().format("HH"));
console.log(currentHour);

function buildTimeBlock(hour){
    var background;
    if(currentHour === hour){
        $timeBlock.addClass("now");
    } else if(currentHour < hour) {
        $timeBlock.addClass("last");
    } else {
        $timeBlock.addClass("almost");
    }
};



// Past time slots turns 50%a --grey

// Current time slot turns 50%a --bloo

// Future slots are 50%a --teel

// Times are --teel

// Save Changes --penk

// When click timeblock, can enter event



// 
var saveBtn = $(".saveBtn");

// Press Confirm Changes to save to localStorage

saveBtn.addEventListener("click", function(event){
    // No refreshy
    event.preventDefault();
    //  Sets description variable for the time slot
    var description = $(this).siblings(".description").val()



})
// document.querySelector("bytton").addEventListener("click", function (e){
// localStorage.setItem("0700", slot0700)
//});


//When page refeshes, saved events persist

// target by id "hour-0700"+ and class "description", set the value of that area after grabbing from localStorage

$(".time-block").each(function(){
    // get id
    var id = $(this).attr("id");

    // Retrive data
    var storedDescription = localStorage.getItem(id);

    $(this).children("textarea").val(storedDescription);

    // How to pull hour
    var timeSlotHour = parseInt(id.replace("hour-", ""));
    console.log(timeSlotHour);

    console.log(id);
});

$(".saveBtn").on("Click", function (){
    var id = $(this).parent().attr("id");
    var description = $(this).siblings("textarea").val();
    localStorage.setItem(id, description);
    // console.log(description);
    // console.log(id);

})