(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 500,
    itemMargin: 5,
    maxItems: 1,
    initDelay: Math.floor(Math.random() * 2000) + 1000
  });

  var propertiesCount = $('.property-item').length;

  $('.properties-wrap').width(propertiesCount * 800).css({
    marginLeft: (winW - 800) / 2
  })
});
