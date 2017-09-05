(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 500,
    itemMargin: 5,
    maxItems: 1,
  });

  var propertiesCount = $('.property-item').length;

  $('.properties-wrap').width(propertiesCount * 800).css({
    marginLeft: (winW - 800) / 2
  })
});
