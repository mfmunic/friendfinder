var user = {}
var userTotal = 0



$("#submit").on("click", function(){

	var userName = $("input[name='name']").val()
	var userPhoto = $("input[name='photo']").val()
	var userScores = []
	
	userScores.push(parseInt($("input[name='q1']:checked").val()))
	userScores.push(parseInt($("input[name='q2']:checked").val()))
	userScores.push(parseInt($("input[name='q3']:checked").val()))
	userScores.push(parseInt($("input[name='q4']:checked").val()))
	userScores.push(parseInt($("input[name='q5']:checked").val()))
	userScores.push(parseInt($("input[name='q6']:checked").val()))
	userScores.push(parseInt($("input[name='q7']:checked").val()))
	userScores.push(parseInt($("input[name='q8']:checked").val()))
	userScores.push(parseInt($("input[name='q9']:checked").val()))
	userScores.push(parseInt($("input[name='q10']:checked").val()))

	JSON.stringify(user = {
		"name" : userName,
		"photo" : userPhoto,
		"scores" : userScores
	})

	console.log(user)

	for (i = 0; i<user.scores.length; i++){
		userTotal += user.scores[i]
	}

	runTableQuery()
})

function runTableQuery() {
	
	var currentURL = window.location.origin
	console.log(user);
	$.post(currentURL + "/api/friends", user, function(friendData){
		console.log(friendData)
		dataSort(friendData);

	})
}

function dataSort(data){
	var friendsTotal = []

	for(i = 0; i < data.length-1; i++) {
		var totals = 0;

		for (j = 0; j < data[i].scores.length; j++) {
			totals += parseInt(data[i].scores[j]);
		};

		friendsTotal.push(totals);
	};
	console.log("friends = "+friendsTotal)
	var difference = []
	for (k = 0; k < friendsTotal.length; k++){
		difference.push(Math.abs(friendsTotal[k] - userTotal))
	}
	console.log("difference = "+difference)
	var closestFriend = 0
	for (l = 1; l < difference.length; l++){
		if (difference[l] < difference[closestFriend]){
			closestFriend = l
		} 
	}
	console.log("user score = "+userTotal)
	console.log("Closest Friend is "+data[closestFriend].name)

	$("#friendPhoto").attr("src",data[closestFriend].photo)
	$("#friendName").text(data[closestFriend].name)

	user = {}
	userTotal = 0

}