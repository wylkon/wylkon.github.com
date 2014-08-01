var portfolio = (function () {
  "use strict"
  var contentVisible = false;


  var events = {
    '.click-to-hide|click' : _hideHeader,
    'window|scroll' : _showHeader
  }

  function init () {
    _loadEvents();
    // _hideHeader();
    // _showHeader();
  }

  function _loadEvents () {
    for (var event in events) {
      var evt = event.split('|');
      $(evt[0]).on(evt[1], events[event] );
    }
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
    if (scrollTop > 200 && !contentVisible) {
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
