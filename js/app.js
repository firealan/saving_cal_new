function calculateSavings(data){
	// determine the number of months between now and the goal date.

	var today = new Date();
	var currentMonth = today.getMonth();
	var currentYear = today.getFullYear();
	var numberOfMonths = 10;
	return numberOfMonths * data.monthlyContributions;
}

$(document).ready(function(){

	console.log('jQuery loaded.');

	$('form').submit(function(event){

		// get the form data

		var formData = {
			'savingsGoalReason': $('#savingsGoalReason').val(),
			'goalMonth': $('#goalMonth').val(),
			'goalYear': parseInt($('#goalYear').val()),
			'savingsGoalAmount': parseFloat($('#savingsGoalAmount').val()),
			'monthlyContributions': parseFloat($('#monthlyContributions').val()),
		};

		// validate the form data

		// process the form data

		totalSavings = calculateSavings(formData);

		console.log(totalSavings);

		if (totalSavings >= savingsGoalAmount){
			var message = "You are on track for your savings goal.";
		} else {
			var message = "Sorry, you need to increase your monthly contribution."
			// insert upsell message here
		}

		$('#results').text(message);

		event.preventDefault();

	});
});