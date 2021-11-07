$(function () {});
// show todays date 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

let tasks = {};


// get loadedTasks
var getTasks = function(){
    var loadedTasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = loadedTasks;

    console.log(loadedTasks)
    $.each(tasks, function(hour, task){
        var hourDiv = $("#" + hour);
        createTask(task, hourDiv);
    });
}

// save tasks 
$(".saveBtn").click(function(){
    var taskTime = $(this).siblings(".hour").text();
    console.log(taskTime);
    var taskText = $(this).siblings(".task").val();
    console.log(taskText);
    
    tasks[taskTime] = taskText;
  
    localStorage.setItem("tasks", JSON.stringify(tasks));
});

getTasks();
