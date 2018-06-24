$('#main-carousel').flickity({
  setGallerySize: false,
  pageDots: false,
  initialIndex: 2,
  prevNextButtons: false,
  dragThreshold: 10,
});

$('nav a').on('click', function (event) {
  console.log(event.target);
  $('#main-carousel').flickity('select', $(event.target).data('slide'));
});
