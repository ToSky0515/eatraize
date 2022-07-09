jQuery(function ($) {
  $(".collection-jumpmenu").clone().appendTo("header");

  var $jmSelects = $(".collection-jumpmenu select");
  var $header = $("header");

  var bodyPaddingTop = $header.outerHeight() + 50;

  $("#shopify-section-main-header").addClass("fixed");

  var $jumpCollectionSections = $(".jump-collection-section");
  var scrollDirectionDown = false;
  var lastScrollTop = 0;

  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    scrollDirectionDown = st > lastScrollTop ? true : false;
    lastScrollTop = st;
  });
  
  var currentScrollView = '';
  var dropDownSelected = false;

  inView(".jump-collection-section")
    .on("enter", function (e) {

      console.log( e.id );

      if (dropDownSelected) {
        
        dropDownSelected = false;

      } else {
        $jmSelects.val(e.id);
      }      

    });

  inView.threshold(0.5);

  $jmSelects.each(function () {

    var $this = $(this);

    $this.on("change", function () {

      $jmSelects.val(this.value);

      currentScrollView = this.value;
      dropDownSelected = true;

      if (currentScrollView == "#") {
        var y = 0;
      } else {
        var n = document.getElementById(this.value);
        var yOffset = -(bodyPaddingTop + 50);
        var y = n.getBoundingClientRect().top + window.pageYOffset + yOffset;
      }

      window.scrollTo({ top: y, behavior: "smooth" });

    });

  });
});
