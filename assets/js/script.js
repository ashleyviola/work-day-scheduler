// show todays date 


// local storage check & place 
var workEvents = JSON.parse(localStorage.getItem("workDay"));
if(workEvents){
    planWorkday = workEvents;
}

$(document).ready(function(){
    //display current day & time 
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".saveBtn").on("click", function(){
        //assign saveBtn click listener 
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
    
    // load saved data from Local storage - for each hour created
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#1 .description").val(localStorage.getItem("13"));
    $("#2 .description").val(localStorage.getItem("14"));
    $("#3 .description").val(localStorage.getItem("15"));
    $("#4 .description").val(localStorage.getItem("16"));
    $("#5 .description").val(localStorage.getItem("17"));
});

