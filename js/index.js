$(document).ready(function () {

$('.flatpickr').flatpickr();

$('.tip').tipr({
    'mode': 'above'
});

$('.image').MyFadeOverImage({
  normalAlpha:0.9,
  hoverAlpha: 2,
  normalToneColor:"#000", 
});

$("#sticker").sticky({topSpacing:0});

$('.main-carousel').flickity({
  // options
  cellAlign: 'center',
  contain: true
});

$('#showModalButton').on('click', function() {
        $('#modal').removeClass('hidden');  
        
    })
$('#closeButton').on('click', function() {
        $('#modal').addClass('hidden'); 
})


});