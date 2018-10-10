const firebaseApi = require('./firebaseApi');

$('#main-carousel').flickity({
  setGallerySize: false,
  pageDots: false,
  initialIndex: 2,
  prevNextButtons: true,
  dragThreshold: 100,
  selectedAttraction: 0.1,
  friction: 0.5,
  accessibility: false,
  draggable: $('#main-carousel').width() <= 600,
});

$('nav a').on('click', function (event) {
  $('#main-carousel').flickity('select', $(event.target).data('slide'));
});

firebaseApi.getContent();
