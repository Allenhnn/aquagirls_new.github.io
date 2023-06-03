
// loader
$(window).on("load", function() {
    // $('.preview').fadeIn(5000);
    $(".aqua").fadeOut(2000); //delay --> 延遲幾秒才fadeOut
    $(".preview").fadeOut(2000);
});

// $(window).on("scroll", function() {
//     var scrollPosition = $(this).scrollTop();
//     var windowHeight = $(this).height();
//     var divHeight = $(".my-div").height();
//     var percentage = (scrollPosition / (divHeight - windowHeight)) * 100;
//     $(".my-div::before").css("height", percentage + "%");
// });

// carousel
$(document).ready(function(){
    console.log('test');
    $('.photo').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        animateIn:"fadeIn",
        animateOut:"fadeOut", 
        autoplayTimeout:2500,
        smartSpeed:450,
        startPosition:'URLHash',
    })
    
    $(".consumer").owlCarousel({
        loop:true,
        items:4,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        stagePadding:50,
        margin:30,
        center:true,
        responsive:{
            0:{
                loop:true,
                items:1,
                nav:true,
            },
            600:{
                loop:true,
                items:2,
                nav:true,
            },
            1000:{
                loop:true,
                items:5,
                nav:true,
            }
        }})

    // 罐子
    $(".pro_carousel").owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout:4000,
        mouseDrag:false,
        rtl:true,
    })
    // 罐子說明
    $(".pro_intros").owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout:4000,
        mouseDrag:false,
        rtl:true,
    })
    // button
    $("#change").click(function(){
        var carousel1 = $(".pro_carousel")
        carousel1.trigger("next.owl.carousel")
        
        var carousel2 = $(".pro_intros")
        carousel2.trigger("next.owl.carousel")
    })
    

    // box
    $('.box_1').mouseenter(function(){
        $('.box_0').addClass('dp')
    })
    $('.box').mouseleave(function(){
        $('.box_0').removeClass('dp')
    })

    // nav
    // let hoverElement = document.getElementById('n1');
    // let originalText = hoverElement.innerHTML;

    // hoverElement.addEventListener('mouseenter', function() {
    // hoverElement.innerHTML = ' <a href="https://line.me/R/ti/p/@056lsqwx" class="nav-link" style="color:white;">立即預約體驗</a> ';
    // });

    // hoverElement.addEventListener('mouseleave', function() {
    // hoverElement.innerHTML = '<a class="nav-link fwb btn" href="https://line.me/R/ti/p/@056lsqwx"> <i class="fa-solid fa-calendar-days"></i></a>';
    // });
})

// 做到navbar的立即預約 hover

// nav>
// 美容小撇步(index)>
// 商品標題>商品按鈕按不了>
// 改footer>

// 如果可以就做放大鏡、搜尋

// 禮拜二去給他們改商品分類的#標籤


window.addEventListener('scroll',()=>{
    if(window.scrollY>300){
        $('.box').addClass("dp")
    
    }
    else{
        $('.box').removeClass("dp")
    
    }
    if(window.scrollY>750){
        $('.navbar').addClass('bg-display')
    }
    else{
        
        $('.navbar').removeClass("bg-display")
    }
})

window.addEventListener('mousemove', (event) => {
    posx = event.clientX - window.innerWidth / 2
    posy = event.clientY - window.innerHeight / 2
    $('.photo').css('transform', 'translate(' + posx * -0.0005 + '%,' + posy * -0.0005 + '%)')
})