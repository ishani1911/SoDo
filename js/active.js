//======>  Mobile Menu Activation

    /*-----------------------
    --> Off Canvas Menu
    -------------------------*/


$('document').ready(function(){
  //======> Example Slider
  AOS.init();
  $('.example-slider').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    arrows: true,
    centerMode: true,
    centerPadding:'350px',
    prevArrow:'<button type="button" class="slick-prev"><i class="icon icon-tail-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="icon icon-tail-right"></i></button>',
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          centerPadding:'200px',

        }
      },
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 3,
          centerPadding:'250px',

        }
      },
      {
        breakpoint: 1640,
        settings: {
          slidesToShow: 3,
          centerPadding:'200px',

        }
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          centerPadding:'170px',

        }
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          centerPadding:'180px',

        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          centerPadding:'100px',

        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          centerPadding:'50px',

        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          centerPadding:'0px',

        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          centerPadding:'300px',

        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          centerPadding:'250px',

        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          centerPadding:'200px',
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          centerPadding:'150px',
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerPadding:'100px',
        }
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          autoplay:true,
          centerPadding:'0px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay:true,
          centerPadding:'0px',
          arrows: false,
        }
      }

    ]
  });
})
