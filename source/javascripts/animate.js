var portfolio = (function () {
  "use strict"
  var contentVisible = false;

  function init () {
    _bindingEvents();
  }

  function _bindingEvents () {
    $(".click-to-hide").on("click", function () {
      _hideHeader();
    });

    $(window).on("scroll", function () {
      _showHeader();
    })
  }

  function _hideHeader () {
    addClassHidder(true);
  }

  function _showHeader () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop === 0) {
      addClassHidder(false);
      contentVisible = false;
    }
    if (scrollTop > 10 && !contentVisible) {

      $(window).scrollTop(1)

      addClassHidder(true);
      contentVisible = true;
    }
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
