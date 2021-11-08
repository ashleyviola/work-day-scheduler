$(document).ready(function(){
    //display current day & time 
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    
    // load saved data from Local storage - for each hour created
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    hourTracker();
});

$(".saveBtn").on("click", function(){
        //assign saveBtn click listener 
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
});

function hourTracker() {
    // get current number of hours 
    // var currentHour = moment().hour();
    currentHour = 11;
    console.log(currentHour);
    
    // loop over time blocks 
    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id"));
        console.log(blockHour);

        // check if we've moved past this time
        if (blockHour < currentHour){
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (blockHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else if (blockHour > currentHour){
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

setInterval(function(){
    hourTracker();
}, 3600000);


