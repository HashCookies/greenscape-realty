(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function() {
  $('.flexslider').each(function() {
    $(this).flexslider({
      animation: "fade",
      animationLoop: false,
      itemWidth: 500,
      itemMargin: 5,
      maxItems: 1,
      initDelay: Math.floor(Math.random() * 2000) + 1000
    });
  });

  $('.property-item').on('click', function() {
    var offset = (winW - $(this).width()) / 2;
    $('.properties-wrap').scrollTo($(this), 500, {
      offset: -offset
    });
  });

  var propertiesCount = $('.property-item').length;

  $('.properties-wrap .inner').width(propertiesCount * 800).css({
    paddingLeft: (winW - 800) / 2,
    paddingRight: (winW - 800) / 2
  })
});
