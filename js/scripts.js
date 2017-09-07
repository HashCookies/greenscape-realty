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



  // var projectItemWidth = 0;
  //
  // if ((winW * 0.9) > 660) {
  //   projectItemWidth = 660;
  // } else {
  //   projectItemWidth = winW - 40;
  // }
  //
  // $('.project-item').width(projectItemWidth);


  var projectItemWidth = 800;

  if (winW > 768) {
    var propertiesCount = $('.project-item').length;
    $('.projects-wrap .inner').width(propertiesCount * projectItemWidth).css({
      paddingLeft: (winW - projectItemWidth) / 2,
      paddingRight: (winW - projectItemWidth) / 2
    });

    $('.project-item').on('click', function() {
      var offset = (winW - $(this).width()) / 2;
      $('.projects-wrap').scrollTo($(this), 500, {
        offset: -offset
      });
    });
  }


  $.fn.scrollToId = function(element, speed=400, offset=0) {

    if (winW < 480) { //Check if mobile
      offset = -10;
    }

    if (!$(element).length) {
      document.location.href = '/';
    }

    $.scrollTo(element, speed, {
      offset: {
        top: offset
      }
    });
    return false;
  }
});
