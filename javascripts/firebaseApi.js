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
