$(document).ready(function () {


    $("#portfolioNav").on('click', function () {
        $("#secondBackground").css({
            "background": "rgba(19, 19, 25, 0.875",
            "transition": "background-color 0.75s "
        });

        $("#about").fadeOut(200);
        $("#contact").fadeOut(200);
        $("#landing").fadeOut(200);

        $("#portfolio").fadeIn(1000);
    });



    $("#aboutNav").on('click', function () {
        $("#secondBackground").css({
            "background": "none",
            "transition": "background 0.75s "
        });

        $("#contact").fadeOut(200);
        $("#portfolio").fadeOut(200);
        $("#landing").fadeOut(200);

        $("#about").fadeIn(750);
    });


    $("#contactNav").on('click', function () {
        $("#secondBackground").css({
            "background": "none",
            "transition": "background 0.75s"
        });

        $("#about").fadeOut(200);
        $("#portfolio").fadeOut(200);
        $("#landing").fadeOut(200);

        $("#contact").fadeIn(500);
    });



    $("#myName").on('click', function () {
        $("#secondBackground").css({
            "background": "none",
            "transition": "background 0.75s"
        });

        $("#about").fadeOut(200);
        $("#portfolio").fadeOut(200);
        $("#contact").fadeOut(200);

        $("#landing").fadeIn(500);
    });
    


	$(".nav-link").on("click", function() {
		$("#toggleButton").click();
	});


});