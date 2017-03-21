// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

$(document).ready(function () {

$('.flatpickr').flatpickr();

$('.tip').tipr({
    'mode': 'above'
});

$('.image').MyFadeOverImage({
  normalAlpha:0.9,
  hoverAlpha: 1,
  normalToneColor:"#000" 
});


});