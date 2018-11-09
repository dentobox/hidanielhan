jQuery(document).ready(function($){
    $('.type-it').typeIt({
        content : 'Hello, World!',
        speed: 120,
        // removeAt: 105,
        // deleteNo: 30,
        callback: function(){console.log('Completed')}
    });
    });

$(document).ready(function() {
  var defaults = {
      auto: false,
      controls: true,
      mode: 'fade',
      item: 1,
      loop: true,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      pause: 5000,
      enableDrag: false,
      speed: 1200
  };
  	var sliderOne = $('#0').lightSlider(defaults);
    var sliderOne = $('#1').lightSlider(defaults);
    var sliderOne = $('#2').lightSlider(defaults);
    var sliderOne = $('#3').lightSlider(defaults);
    var sliderOne = $('#4').lightSlider(defaults);
    var sliderOne = $('#5').lightSlider(defaults);
    var sliderOne = $('#6').lightSlider(defaults);
    var sliderOne = $('#7').lightSlider(defaults);
    // var sliderOne = $('#7').lightSlider(defaults);


  $('.ls').on('click', function (e) {
    var target = $(this)[0].id;

    if(target == 0) {
      sliderOne.goToNextSlide();
    }
    if(target == 1) {
      sliderOne.goToNextSlide();
    }
    if(target == 2) {
      sliderOne.goToNextSlide();
    }
    if(target == 3) {
      sliderOne.goToNextSlide();
    }
    if(target == 4) {
      sliderOne.goToNextSlide();
    }
    if(target == 5) {
      sliderOne.goToNextSlide();
    }
    if(target == 6) {
      sliderOne.goToNextSlide();
    }
    if(target == 7) {
      sliderOne.goToNextSlide();
    }
    // if(target == 7) {
    //   sliderOne.goToNextSlide();
    // }

  });
});
