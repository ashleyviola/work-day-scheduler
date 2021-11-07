// show todays date 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

$(function () {});
  
/* planWorkday entries for each hour of the workday */
var planWorkday = [
  { time: "9 AM", event: "" },
  { time: "10 AM", event: "" },
  { time: "11 AM", event: "" },
  { time: "12 PM", event: "" },
  { time: "1 PM", event: "" },
  { time: "2 PM", event: "" },
  { time: "3 PM", event: "" },
  { time: "4 PM", event: "" },
  { time: "5 PM", event: "" },
];

// local storage check & place 
var workEvents = JSON.parse(localStorage.getItem("workDay"));
if(workEvents){
    planWorkday = workEvents;
}


/* Create rows */
planWorkday.forEach(function(timeBlock, index) {
	var timeLabel = timeBlock.time;
	//var blockColor = colorRow(timeLabel);
	var row =
		'<div class="time-block" id="' +
		index +
		'"><div class="row no-gutters input-group"><div class="col-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
		timeLabel +
		'</div><textarea class="form-control task">' +
		timeBlock.event +
		'</textarea><div class="col-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

	/* Adding rows to container div */
	$(".container").append(row);
});

// save tasks 
$(".saveBtn").click(function(){
    let taskTimeId = parseInt($(this).closest(".time-block").attr("id"));
    let userEntry = $(this).parent().siblings("textarea").val();

    planWorkday[taskTimeId].event = userEntry;

    localStorage.setItem("workDay", JSON.stringify(planWorkday));
});
