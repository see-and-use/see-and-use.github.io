$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('.form-button').html('Отправлено').css('background-color','#F5BC7F');
			$("#form").trigger("reset");
		});
		return false;
	});
	
});