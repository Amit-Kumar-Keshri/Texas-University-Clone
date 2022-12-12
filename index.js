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
  });

  //  Second active item
  jQuery(".menu--item__two").click(function () {
    jQuery(".link1").addClass("decor");
    jQuery(".link").removeClass("decor");
    jQuery(".link2").removeClass("decor");
  });

  // Third active item
  jQuery(".menu--item__three").click(function () {
    jQuery(".link2").addClass("decor");
    jQuery(".link").removeClass("decor");
    jQuery(".link1").removeClass("decor");
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
  
// navbar scroll
jQuery(document).scroll(function () {
  var scroll_counter = jQuery(this).scrollTop();
  if (scroll_counter > 1) {
    jQuery(".icc").css("height", "70px");
    jQuery(".nav-toggle").css("height", "70px");
  } else {
    jQuery(".icc").css("height", "100px");
    jQuery(".nav-toggle").css("height", "100px");
  }
});



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

});
