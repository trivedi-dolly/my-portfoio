$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass("fa-bars fa-times");
        $('header').toggleClass('toggle');
    })
})