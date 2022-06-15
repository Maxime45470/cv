$(function(){
    $('.page').hover(
        function(){
            $(this).stop().animate({ width:700, height:500 }, 'fast');
        },
        function(){
            $(this).stop().animate({ width:400, height:200 }, 'fast');
        }
    );
    $('.page').click(function(){
        window.location.href = './page/cv.html';
    });
});