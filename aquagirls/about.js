$(document).ready(function () {
    $(window).on("load", function () {
        // $('.preview').fadeIn(5000);
        // $('.bg_blue').fadeIn(500)
        $('.aqua').fadeIn(1000);
        $(".aqua").fadeOut(1500); //delay --> 延遲幾秒才fadeOut
        $('.bg_blue').fadeOut(1250);
        $('.preview').fadeOut(1500);

        $('.box_1').mouseenter(function () {
            $('.box_0').addClass('dp')
        })
        $('.box').mouseleave(function () {
            $('.box_0').removeClass('dp')
        })
    })

    
    
})

window.addEventListener('mousemove', (event) => {
    posx = event.clientX - window.innerWidth / 2
    posy = event.clientY - window.innerHeight / 2
    $('.aboutbg').css('transform', 'translate(' + posx * -0.00035 + '%,' + posy * -0.00035 + '%)')
    $('.product_bg').css('transform', 'translate(' + posx * -0.00035 + '%,' + posy * -0.00035 + '%)')
    $('.product_bg').css('transform', 'translate(' + posx * -0.00035 + '%,' + posy * -0.00035 + '%)')
    $('.stepbg').css('transform', 'translate(' + posx * -0.00035 + '%,' + posy * -0.0005 + '%)')
    $('.contact_bg').css('transform', 'translate(' + posx * -0.00035 + '%,' + posy * -0.0005 + '%)')
})