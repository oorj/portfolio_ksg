$(function() {
    $('.gnb > ul > li').on('mouseover', function() {
        $('.bgGnb').slideDown();
        $('.gnb .sub').slideDown();
    })
    $('.gnb').on('mouseleave', function() {
        $('.bgGnb').slideUp(300);
        $('.gnb .sub').slideUp(300)
    })
});