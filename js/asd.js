$(function(){
    $('.gnb > ul > li').on('mouseover', function(){
        $('.bgGnb').fadeIn();
        $('.gnb .sub').fadeIn();
    })
    $('.bgGnb').on('mouseleave', function(){
        $('.bgGnb').fadeOut(300);
        $('.gnb .sub').fadeOut(300);
    })
    $('.mobile').on('click', function(){
        $('.depth1').css('right', '0')
    })
    $('.depth1').on('')
});