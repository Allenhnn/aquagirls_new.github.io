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

    // search bar
    $('#clearbutton').click(function(){
        $('#searchInput').val("");
        document.getElementById("searchInput").dispatchEvent(new Event("input"))
    })

    const searchInput = document.getElementById('searchInput');
    const cards = document.getElementsByClassName('card');
    
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toString();
    
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const tags = card.getElementsByClassName('tag');
        
        let hasMatch = false;
    
        for (let j = 0; j < tags.length; j++) {
          const tag = tags[j];
          const tagText = tag.innerText.toString();
    
          if (tagText.includes(searchTerm)) {
            hasMatch = true;
            break;
          }
        }
    
        if (hasMatch) {
          card.style.display = 'block'; // 顯示符合條件的卡片
          console.log(typeof card)

        } else {
          card.style.display = 'none'; // 隱藏不匹配的卡片
        }
      }
    });

    $("#hot_search").click(function(){
      var button_text = $(this).text();
      $("#searchInput").val(button_text);
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