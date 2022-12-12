jQuery(document).ready(function () {
  jQuery(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  jQuery(".link").addClass("color");
  //   First active itejQuery
  jQuery(".menu--item__one").click(function () {
    jQuery(".link").addClass("decor");
    jQuery(".link1").removeClass("decor");
    jQuery(".link2").removeClass("decor");
    // jQuery(".bottom__line").removeClass("bottom__active1 bottom__active2");
  });

  //  Second active item
  jQuery(".menu--item__two").click(function () {
    jQuery(".link1").addClass("decor");
    jQuery(".link").removeClass("decor");
    jQuery(".link2").removeClass("decor");
    // jQuery(".bottom__line").removeClass("bottom__active bottom__active2");
  });

  // Third active item
  jQuery(".menu--item__three").click(function () {
    // jQuery(".bottom__line").addClass("bottom__active2");
    jQuery(".link2").addClass("decor");
    jQuery(".link").removeClass("decor");
    jQuery(".link1").removeClass("decor");
    // jQuery(".bottom__line").removeClass("bottom__active bottom__active1");
  });

  // nav toggle
  document
    .querySelector("nav .container .nav-toggle")
    .addEventListener("click", () => {
      document
        .querySelector("nav .container .nav-toggle span")
        .classList.toggle("active");
      document
        .querySelector("nav .container .nav-links")
        .classList.toggle("active");
    });

  jQuery(".omm").click(function () {
    jQuery(".onscreen-box").toggle("slide");
    jQuery("img.search-imgg").toggleClass("active");
  });
  
});
