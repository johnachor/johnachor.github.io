const stringbuilder = require('./stringbuilder');
const baseUrl = 'https://johnachor-github-personal.firebaseio.com/';

const getContent = () => {
  getBlogs().then(data => $('#blog-entries').html(data.reverse().map(stringbuilder.buildBlogCard)));
  getProjects().then(data => $('#projects-entries').html(data.map(stringbuilder.buildProjectCard)));
};

const getBlogs = () => {
  return new Promise((resolve, reject) => {
    $.get(`${baseUrl}/blogentries.json`)
      .fail(err => reject(err))
      .done(data => resolve(data));
  });
};

const getProjects = () => {
  return new Promise((resolve, reject) => {
    $.get(`${baseUrl}/projects.json`)
      .fail(err => reject(err))
      .done(data => resolve(data));
  });
};

module.exports = {
  getContent,
};
