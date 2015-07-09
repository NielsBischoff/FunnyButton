$().ready(function(){

	$("#funny-button").on("click", function(){
		var p = Posts.findOne({rnd: {$gte: Math.random()}}).fetch();
		console.log(p);
		alert("sup?");
		return false;
	});

});
