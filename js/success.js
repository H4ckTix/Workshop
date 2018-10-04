function showAchievement() {
    $('#achievement .circle').removeClass('rotate');
    // Run the animations
    setTimeout(function () {
      $('#achievement').addClass('expand');
        var audio = new Audio('https://centracomm.cachefly.net/majornelson/2007/Achievement-mp3-sound.mp3');
        audio.play();
      setTimeout(function () {
        $('#achievement').addClass('widen');
        setTimeout(function () {
          $('#achievement .copy').addClass('show');
        }, 1000);
      }, 1000);
    }, 1000);
    // Hide the achievement
    setTimeout(function () {
      hideAchievement();
    }, 4000);
  }
  
  function hideAchievement() {
    setTimeout(function () {
      $('#achievement .copy').removeClass('show');
       setTimeout(function () {
        $('#achievement').removeClass('widen');
         $('#achievement .circle').addClass('rotate');
          setTimeout(function () {
            $('#achievement').removeClass('expand');
            $('.refresh').fadeIn(300);
          }, 1000);
       }, 1000);
    }, 3000);
    
    $('.refresh').click(function () {
      showAchievement();
      $(this).fadeOut(300);
    });
  }