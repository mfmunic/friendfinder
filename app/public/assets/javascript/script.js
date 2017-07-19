$("#submit").on("click", function(){

	var userName = $("input[name='name']").val()
	var userPhoto = $("input[name='photo']").val()
	var user = {
		"name" : userName,
		"photo" : userPhoto,
		"scores" : []
	}
	user.scores.push(parseInt($("input[name='q1']:checked").val()))
	user.scores.push(parseInt($("input[name='q2']:checked").val()))
	user.scores.push(parseInt($("input[name='q3']:checked").val()))
	user.scores.push(parseInt($("input[name='q4']:checked").val()))
	user.scores.push(parseInt($("input[name='q5']:checked").val()))
	user.scores.push(parseInt($("input[name='q6']:checked").val()))
	user.scores.push(parseInt($("input[name='q7']:checked").val()))
	user.scores.push(parseInt($("input[name='q8']:checked").val()))
	user.scores.push(parseInt($("input[name='q9']:checked").val()))
	user.scores.push(parseInt($("input[name='q10']:checked").val()))

	runTableQuery()
})

function runTableQuery() {
	var currentURL = window.location.origin

	$.ajax({url: currentURL + "/api/tables", method: "GET"})
		.done(function(tableData){
			console.log(tableData)
		})
}