$( document ).ready(function() {
	
	$("#section-1").show();
	
	//When select a site type
	$( "#site-type" ).change(function() {
		console.log($( "option:selected", this ).attr("qID"));
		var qID = $( "option:selected", this ).attr("qID");
		console.log(qID);
		
		$("#section-1 ul").hide();
		$("#section-1 ul#" + qID).show("fast");

		$("#section-2").show("slow");
	});


	$( "#device-type" ).change(function() {
		
		var qID = $( "option:selected", this ).attr("qID");
		$("#section-2 ul").hide();
		$("#section-2 ul#" + qID).show("fast");
	});

	//paramaters -
	/*
	question-select-id
	section-id

	*/
});