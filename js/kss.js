$(function(){
    $('.gnb > ul > li').on('mouseover', function(){
        $('.bgGnb').fadeIn();
        $('.gnb .sub').fadeIn();
    })
    $('.bgGnb').on('mouseleave', function(){
        $('.bgGnb').fadeOut(300);
        $('.gnb .sub').fadeOut(300);
    })
});