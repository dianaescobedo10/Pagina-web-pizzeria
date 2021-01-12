$(document).ready(function(){
    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-times");
        $("nav").toggleClass("nav-toggle");
    });

    $("nav ul li a").click(function(){
        $(".fa-bars").removeClass("fa-times");
        $("nav").removeClass("nav-toggle");
    });

    $(window).on('scroll load',function(){
        if($(window).scrollTop() > 10){
            $("#header").addClass("header-active");
        }else{
            $("#header").removeClass("header-active");
        }
    });
});