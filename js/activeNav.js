
$(document).ready(function () {
    $('.nav-links li a').click(function (event) {
        $('.nav-links li a').removeClass('active');
        $(this).addClass('active');
        thisAttrHref = $(this).attr('href');
        thisAttrHrefOffset = $(thisAttrHref).offset().top;
        $('html,body').animate({ scrollTop: thisAttrHrefOffset - 100 });
        event.preventDefault();
    });
});

$(window).scroll(function () {
    $('section').each(function(){
        containerRowTop = $(this).offset().top;
        if($(document).scrollTop()+200 > containerRowTop){
            thisOffset = $(this).attr('id');
            $('section').removeClass('active');
            ActiveID = $(this).addClass('active').attr('id');
        }
    });
    $('.nav-links li').each(function(index, el){
        thisChildren = $(this).children('a');
        thisChildrenHref = $(this).children('a').attr('href');
        if(thisChildrenHref === '#' +ActiveID){
            $('.nav-links li a').removeClass('active');
            $(thisChildren).addClass('active');
        }
    });
});