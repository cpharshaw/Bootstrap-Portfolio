$(document).ready(function () {


    $("#portfolioNav").on('click ', function () {
        $("#secondBackground").css({
            "background": "rgba(19, 19, 25, 0.875",
            "transition": "background-color .5s "
        });

        $("#about").fadeOut(200);
        $("#contact").fadeOut(200);
        $("#landing").fadeOut(200);

        $("#portfolio").fadeIn(800);
    });



    $("#aboutNav").on('click ', function () {
        $("#secondBackground").css({
            "background": "none",
            "transition": "background .5s "
        });

        $("#contact").fadeOut(200);
        $("#portfolio").fadeOut(200);
        $("#landing").fadeOut(200);

        $("#about").fadeIn(800);
    });


    $("#contactNav").on('click ', function () {
        $("#secondBackground").css({
            "background": "none",
            "transition": "background .5s"
        });

        $("#about").fadeOut(200);
        $("#portfolio").fadeOut(200);
        $("#landing").fadeOut(200);

        $("#contact").fadeIn(800);
    });



    $("#myName").on('click ', function () {
        $("#secondBackground").css({
            "background": "none",
            "transition": "background .5s"
        });

        $("#about").fadeOut(200);
        $("#portfolio").fadeOut(200);
        $("#contact").fadeOut(200);

        $("#landing").fadeIn(800);
    });


    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('#myName').click(function(){
        $(".navbar-collapse").collapse('hide');
    });    



});