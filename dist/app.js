(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const stringbuilder = require('./stringbuilder');
const baseUrl = 'https://johnachor-github-personal.firebaseio.com/';

const getContent = () => {
  getBlogs().then(data => $('#blog-entries').html(data.slice(-3).reverse().map(stringbuilder.buildBlogCard)));
};

const getBlogs = () => {
  return new Promise((resolve, reject) => {
    $.get(`${baseUrl}/blogentries.json`)
      .fail(err => reject(err))
      .done(data => resolve(data));
  });
};

module.exports = {
  getContent,
};

},{"./stringbuilder":3}],2:[function(require,module,exports){
const firebaseApi = require('./firebaseApi');

$('#main-carousel').flickity({
  setGallerySize: false,
  pageDots: false,
  initialIndex: 2,
  prevNextButtons: false,
  dragThreshold: 10,
});

$('nav a').on('click', function (event) {
  $('#main-carousel').flickity('select', $(event.target).data('slide'));
});

firebaseApi.getContent();

},{"./firebaseApi":1}],3:[function(require,module,exports){
const buildBlogCard = (blogEntry) => {
  return `
  <div class="blog-card card">
    <div class="card-content">
      <span class="card-title">${blogEntry.title}</span>
      <p>${blogEntry.content}</p>
    </div>
    <div class="card-action">
      <p>${blogEntry.date}</p>
    </div>
  </div>
  `;
};

module.exports = {
  buildBlogCard,
};

},{}]},{},[2]);
