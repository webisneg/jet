//* Load
jQuery(window).bind('load', function() {
    damaxOwlCarousel();
    // priceMatchHeight();
    // stickyHeader();
});

//* Resize
jQuery(window).resize(function() {
    // priceMatchHeight();
});

//* Scroll
jQuery(window).scroll(function() {
    // scrollanim();
});

//* Register
function damaxRegister() {
    damaxOwlCarousel();
    damaxToggleMenu();
    // priceMatchHeight();
}
damaxRegister();
//** BEG CUSTOM FUNCTIONS **//


// function priceMatchHeight() {
//  jQuery(function() {
//         jQuery('.build-info p').matchHeight();
//         jQuery('.top-right h3').matchHeight();
//     });
// }

$('.input-phone').intlInputPhone();

jQuery('.popup-btn').magnificPopup({
    type: 'inline',
    duration: 400,
    removalDelay: 500,
    callbacks: {
        beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
     }
 },
 midClick: true
});


jQuery('.close-btn').click(function(event) {
    event.preventDefault();
    jQuery.magnificPopup.close();
});



function damaxToggleMenu() {
    $("#toggle").click(function() {
        $(this).toggleClass(" on");
        $(".nav-menu").slideToggle();
    });

    $(".category-menu-show").click(function() {
        $(".category-block").slideToggle();
    });

    $(".filter-mob button").click(function() {
        $(".filter-block-container").slideToggle();
    });

    $(".close-filter").click(function() {
        $(".filter-block-container").slideToggle();
    });

    $(".icon-calendar").click(function() {
        $(".calendar-block").toggleClass(" active");
        $(this).toggleClass(" active");
    });
}





function damaxOwlCarousel() {

  var team = $("#product-slider");

  team.owlCarousel({
    dots: false,
    nav: true,
    items:4,
    margin: 30,
    loop: true,
    mouseDrag: false,
    navText: ["<img src='img/prev.svg'>","<img src='img/next.svg'>"],
    responsive:{
        0:{
            items: 1,
        },
        767:{
            items:3,
        },
        992:{
            items:4,
        }
    }
});


  var work = $("#work-slider");

work.owlCarousel({
    dots: true,
    nav: false,
    items:3,
    margin: 20,
    loop: true,
    mouseDrag: false,
    autoWidth: true,
    responsive:{
        0:{
            items: 1,
        },
        767:{
            items: 2,
        },
        992:{
            items:4,
        }
    }
});


}



  $('.slick-slider').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slick-thumbs',
     responsive: [
    {
      breakpoint: 1024,
      settings: {
      }
    },
    {
      breakpoint: 992,
      settings: {
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
         dots: true,
      }
    }
    ]
  });

  $('.slick-thumbs').slick({
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: "<a href='javascript:;' class='pic-prev slider-arrow'><img src='img/prev.svg' alt=''></a>",
    nextArrow: "<a href='javascript:;' class='pic-next slider-arrow'><img src='img/next.svg' alt=''></a>",
    autoplay: false,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slick-slider',
  });