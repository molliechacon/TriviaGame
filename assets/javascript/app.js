$(document).ready(function(){

// declare initial variables
var counter = 60;
var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;

// hide game and end page divs
$("#gamePage").hide();
$("#endPage").hide();

// click to start game
$("#startButton").on("click", function() {
	$("#startPage").hide();
	$("#gamePage").show();
	setInterval(countdown, 1 * 1000);
})

function countdown () {
	counter--;
	$("#timerCount").html(counter + " Seconds");
	if(counter === 0) {
		clearInterval(countdown);
		gameOver();
		$("#gamePage").hide();
		$("#endPage").show();
	}
}

function gameOver () {
	// grabbing checked answers
	var q1 = $("input:radio[name='q1Options']:checked").val();
	var q2 = $("input:radio[name='q2Options']:checked").val();
	var q3 = $("input:radio[name='q3Options']:checked").val();
	var q4 = $("input:radio[name='q4Options']:checked").val();
	var q5 = $("input:radio[name='q5Options']:checked").val();
	var q6 = $("input:radio[name='q6Options']:checked").val();
	var q7 = $("input:radio[name='q7Options']:checked").val();
	var q8 = $("input:radio[name='q8Options']:checked").val();


	// updating vars for correct/incorrect/unanswered
	// consider DRY if have time!!! 
		/*tried running the following for loop with no luck!!!
		all answers end up in the "else" case. Curious as to why...:

		var answers = [q1, q2, q3, q4, q5, q6, q7, q8];
			console.log(answers);
		for (i=0; i<answers.length; i++) {
				if (i === undefined) {
					numUnanswered++;
				} else if (i === "correct") {
					numCorrect++;
				} else {
					numWrong++;
				}
			}*/
				
	if (q1 === undefined){
		numUnanswered++;
	} else if (q1 === "correct") {
		numCorrect++;
	} else {
		numWrong++;
	}

	if (q2 === undefined){
		numUnanswered++;
	} else if (q2 === "correct") {
		numCorrect++;
	} else {
		numWrong++;
	}

	if (q3 === undefined){
		numUnanswered++;
	} else if (q3 === "correct") {
		numCorrect++;
	} else {
		numWrong++;
	}

	if (q4 === undefined){
		numUnanswered++;
	} else if (q4 === "correct") {
		numCorrect++;
	} else {
		numWrong++;
	}

	if (q5 === undefined){
		numUnanswered++;
	} else if (q5 === "correct") {
		numCorrect++;
	} else {
		numWrong++;
	}	

	if (q6 === undefined){
		numUnanswered++;
	} else if (q6 === "correct") {
		numCorrect++;
	} else {
		numWrong++;
	}	

	if (q7 === undefined){
		numUnanswered++;
	} else if (q7 === "correct") {
		numCorrect++;
	} else {
		numWrong++;
	}

	if (q8 === undefined){
		numUnanswered++;
	} else if (q8 === "correct") {
		numCorrect++;
	} else {
		numWrong++;
	}

	// display results
	$("#correctAnswers").html("Correct Answers: " + numCorrect);
	$("#incorrectAnswers").html("Incorrect Answers: " + numWrong);
	$("#unanswered").html("Unanswered: " + numUnanswered);
}

});