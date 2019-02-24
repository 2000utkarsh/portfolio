$(document).ready(function () { 




  function removeActiveClass() {
    $('.center').find('a').each(function (i, el) {if ($(el).hasClass('active')) {
        $(el).removeClass('active');
      }

    });
  }



  function removeOpenClass() {
    $('.container').each(function (i, el) {
      if ($(el).hasClass('open')) {
        $(el).removeClass('open');
      }
    });
  }



  $('.js-close').on('click', function (e) {
    e.preventDefault();
    removeActiveClass();
    $('.center').animate({
      opacity: '0' },
    100);
    removeOpenClass();
    $('.close-arrow').hide();
  });



  $('.js-open-about').on('click', function (e) {
    e.preventDefault();
    removeOpenClass();
    $('.about').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1' },
    500);
    removeActiveClass();
    $('.center').find('.js-open-about').addClass('active');
  });



  $('.js-open-works').on('click', function (e) {
    e.preventDefault();
    removeOpenClass();
    $('.works').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1' },
    500);
    removeActiveClass();
    $('.center').find('.js-open-works').addClass('active');
  });



  $('.js-open-contact').on('click', function (e) {

    console.log("vfhsdshdhs")
          

    e.preventDefault();
    removeOpenClass();
    $('.contact').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1' },
    500);
    removeActiveClass();
    $('.center').find('.js-open-contact').addClass('active');
  });



  $('.js-open-link').on('click', function (e) {  
     
    e.preventDefault();
    removeOpenClass();
    $('.link').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1' },
    500);
    removeActiveClass();
    $('.center').find('.js-open-link').addClass('active');
  });



 $('.js-open-resume').on('click', function (e) {
    e.preventDefault();
    removeOpenClass();
    $('.resume').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1' },
    500);
    removeActiveClass();
    $('.center').find('.js-open-resume').addClass('active');
  });



  $('.js-open-drive_link').on('click', function (e) {
    e.preventDefault();
    removeOpenClass();
    $('.drive_link').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1' },
    500);
    removeActiveClass();
    $('.center').find('.js-open-drive_link').addClass('active');
  });

});






if (document.createElement("p").style.flex === undefined) {
  alert("no flexbox support");
}

$.backstretch([
"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1464896760/photo-1428223501723-d821c5d00ca3_knl5ki.jpg"],
{
  duration: 20000,
  fade: 'slow' });