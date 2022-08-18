$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-bars');
        $('header').toggleClass('fa-bars');
    })
})