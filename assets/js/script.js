// show todays date 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// work hours 
let workHours = [
    {time: "9 AM", event: ""},
    {time: "10 AM", event: ""},
    {time: "11 AM", event: ""},
    {time: "12 PM", event: ""},
    {time: "1 PM", event: ""},
    {time: "2 PM", event: ""},
    {time: "3 PM", event: ""},
    {time: "4 PM", event: ""},
    {time: "5 PM", event: ""}
];

// create work hour rows 
workHours.forEach(function(timeBlock, index){
    var timeLabel = timeBlock.time;
    // <div class = timebloack> 
    // <div class = row>
    // <div class = col 1> time </div>
    // <textarea></>
    // <div class = col11> save button 
    var row = 
        '<div class="time-block" id="'+ 
        index + 
        '"><div class="row no-gutters"><div class="col-1">'+
        timeLabel + 
        '</div><textarea class="form-control col-10">' +
        timeBlock.event + 
        '</textarea><div class="col-1"><button class="saveBtn btn-block"type="submit"><i class="bi bi-save"></i></button></div></div></div>';
    $(".container").append(row);
});

// save work hour descriptions 
let saveTasks = function(){
    localStorage.setItem("workTasks",JSON.stringify(workHours));
}
saveTasks();