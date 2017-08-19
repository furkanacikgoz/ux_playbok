


$( document ).ready(function() {
	
	var imported = document.createElement('script');
	imported.src = 'typed.min.js';
	document.head.appendChild(imported);	

	$("#section-1").show();
	
	//When select a site type
	$( "#question-1" ).change(function() {
		//console.log($( "option:selected", this ).attr("qID"));
		var qID = $( "option:selected", this ).attr("qID");
		//console.log(qID);
		
		$("#section-1 ul").hide();
		$("#section-1 ul#" + qID).show("fast");

		$("#section-2").show("slow");

		$.getJSON("data.json", function(data){
			//console.log(data["question-1"][qID]);
			
			$.each(function(data, item) {
    			console.log(data.items)
			});
		});

		$.getJSON('data.json', function(json) {
			object = json;
			$('#list-items').append('<ul/>')
			$.each(object["question-1"], function() {
				var list = $('#list-items ul'),
				listItem = $('<li/>'),
				html = listItem.append($('<h3/>').text(this));
				console.log(this);
				$.each(this.store, function() {
				listItem.append($('<a />').attr('href', this).text(this));
				});
				

				list.append(html)
			});
		});
	});

	$( "#question-2" ).change(function() {		
		var qID = $( "option:selected", this ).attr("qID");
		$("#section-2 ul").hide();
		$("#section-2 ul#" + qID).show("fast");
		$("#section-3").show("slow");
	});

	$( "#question-3" ).change(function() {
		var qID = $( "option:selected", this ).attr("qID");
		$("#section-3 ul").hide();
		$("#section-3 ul#" + qID).show("fast");		
	});

	$.getJSON('data.json', function(json) {
		//console.log(json);

	});

	//paramaters -
	/*
	question-select-id
	section-id

	*/

	//method title added
	$(".list-items ul").prepend('<li class="methods-title">Önerilen Metodlar</li>')

	//tabs style
	$( ".tabs li a" ).click(function() {
		console.log($(" ul li a", this));

		$("ul", this).removeClass("selected-tab");
		$(this).addClass("selected-tab");
	});


	//typed func.
	var typed = new Typed('.title-text', {
	strings: ["kullanıcılarınız ne söylüyor?", "kullanıcılarınız nasıl davranıyor?", "ürününüz kullanılabilir mi?", "kullanıcılar bu ürüne parar verir mi?", "kırmızı buton mu? mavi mi?", "müşterilerinizi anlayın", "kullanıcı deneyiminizi iyileştirin!"],
        typeSpeed: 40,
        backSpeed: 10,
        startDelay: 1000,
        shuffle: true,
        backDelay: 5000,
        loop: true,
        cursorChar: ''
	});
	




});