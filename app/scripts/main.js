'use strict';

$(document).ready(function(){
  $('.demo-button').click(function(){
    $('.demo-container').removeClass('hide-demo');
    $('.demo-container').addClass('show-demo');
  });
  // once demo request modal is open this checks if user clicks outside of form and closes it.
  $('body').click(function(evt){   
    if ($(evt.target).hasClass('show-demo')) {
      $('.demo-container').removeClass('show-demo');
      $('.demo-container').addClass('hide-demo');
    }
  });

  window.sr = ScrollReveal();
  sr.reveal('.header .container', {
    delay: 200,
    viewFactor: 0.4,
    origin: 'top',
    distance: '0px',
    duration: 1500,
  });
  sr.reveal('.cloud-section .container', {
    delay: 500,
    viewFactor: 0.4,
    origin: 'top',
    distance: '0px',
    duration: 1500,
  });
  sr.reveal('.ip-group', {
    duration: 2000,
    viewFactor: 0.6,
    scale: 0.5,
  }, 200);
  sr.reveal('.crm-section .crm-box', {
    delay: 200,
    duration: 1000,
  }, 500);
  sr.reveal('.learn-more h4', {
    delay: 100,
    duration: 1000,
  }, 500);
  sr.reveal('.learn-more .button', {
    delay: 700,
    duration: 1000,
  }, 500);

})