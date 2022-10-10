/**
* Script Name: Naxum - webinar
* Template URL: https://www.naxum.com/
* Author: Ahmed Daif
* Version: 0.0.1
*/

$(document).ready(() => {
  $('#contact-modal').modal();

  // #register-btn modal showing
  $('#register-btn,.close').click(() => {
    $('#contact-modal').modal('toggle');
  });

  // #watch-webinar button click validation
  $('#watch-webinar').click((e) => {
    e.preventDefault();
    e.stopPropagation();
    let valid = $('#watch-form')[0].checkValidity();
    if (!valid) {
      $('#watch-form').addClass('was-validated');
    } else {
      $('#contact-modal').modal('toggle');
      $("#video-container").modal('toggle');
    }
  });
});