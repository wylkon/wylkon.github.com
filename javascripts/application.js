var portfolio = (function () {
  "use strict"
  var contentVisible = false;

  function init () {
    _hideHeader();
    _showHeader();
  }

  function _hideHeader () {
    $(".click-to-hide").on("click", function (e) {
      e.preventDefault();
      addClassHidder(true);
    })
  }

  function _showHeader () {
    $(window).on("scroll", function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop === 0) {
        addClassHidder(false);
        contentVisible = false;
      }
      if (scrollTop > 200 && !contentVisible) {
        $("body").animate({ scrollTop: 1 }, 800);
        addClassHidder(true);
        contentVisible = true;
      }
    })
  }

  function addClassHidder (visible) {
    $('body').toggleClass('show-content', visible);
  }

  return {
    init: init
  }
})();


$(window).load(function(){
  portfolio.init();
});


