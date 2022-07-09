$(".multiple-items").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".display-mobile-product").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".choclate").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 539,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 538,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

const shoppingCartBtn = document.querySelector("#toggleSlideCart");

// const sidebar = document.querySelector(".sidebar");

// const closeBtn = document.querySelector(".close-btn");

$(function () {
  $(".toggleSlideCart").click(function (e) {
    e.preventDefault();
    if ($("#slidecarthq .slidecarthq.right").hasClass("open")) {
      SLIDECART_CLOSE();
    } else {
      SLIDECART_OPEN();
    }
  });
});

// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });

// navbar toggle search

$(function () {
  $('a[href="#search"]').on("click", function (event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="search"]').focus();
  });
  // $("#search, #search button.close").on("click keyup", function (event) {
  //   if (
  //     event.target == this ||
  //     event.target.className == "close" ||
  //     event.keyCode == 27
  //   ) {
  //     $(this).removeClass("open");
  //   }
  // });
  //Do not include! This prevents the form from submitting for DEMO purposes only!
  // $("form").submit(function (event) {
  //   event.preventDefault();
  //   return false;
  //});
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  //>=, not <=
  if (scroll >= 100) {
    $(".header").addClass("darkHeader");
  } else {
    $(".header").addClass("headerNav");
    $(".header").removeClass("darkHeader");
  }
}); //missing );

$(document).ready(function () {
  $(".product-slick-slider-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".product-slick-slider-nav",
  });
  $(".product-slick-slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".product-slick-slider-main",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  });
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
});
