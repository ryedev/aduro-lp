'use strict';

$(document).ready(function(){
  window.sr = ScrollReveal();
  sr.reveal('.cloud-section .container .cloud', {
    delay: 500,
    viewFactor: 0.5,
    origin: 'top',
    distance: '0px',
    duration: 1500,
  });
  sr.reveal('.ip-group', {
    duration: 2000,
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