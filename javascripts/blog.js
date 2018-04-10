/* jshint esversion: 6 */

const createBlogCard = (blogObject) => {
  return `<article class="blogpost card" id="${blogObject.id}">
            <h2 class="blogtitle">${blogObject.title}</h2>
            <h5 class="blogdate">${blogObject.date}</h5>
            <p class="blogtext">${blogObject.content}</p>
          </article>`;
};

const writeToDom = (blogString) => {
  document.getElementById("blog").innerHTML += blogString;
};

const main = (blogData) => {
  let blogentries = JSON.parse(blogData.target.responseText);
  blogentries.blogentries.map(createBlogCard).reverse().forEach(writeToDom);
};

const getBlogData = () => {
  var request = new XMLHttpRequest();
  request.addEventListener("load", main);
  request.addEventListener("error", e => {
    console.log("Error in JSON request: ", e);
  });
  request.open("GET", "/data/blog.json");
  request.send();
};

getBlogData();