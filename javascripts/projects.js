/* jshint esversion:6 */

const createProjectCard = (projectObject) => {
  return `<div class="project card" id="${projectObject.id}">
            <img src="${projectObject.imageUrl}" class="project-img">
            <h2 class="project-title">${projectObject.title}</h2>
            <p class="project-description">${projectObject.description}</p>
            <p><a class="githublink" href="${projectObject.githubUrl}"><img class="socialmedia" src="/img/github.png" alt="Github logo"></a></p>
          </div>`;
};

const writeToDom = (projectString) => {
  document.getElementById("projects").innerHTML += projectString;
};

const main = (projectData) => {
  let parsedData = JSON.parse(projectData.target.responseText);
  parsedData.projects.map(createProjectCard).reverse().forEach(writeToDom);
};

const getProjectData = () => {
  var request = new XMLHttpRequest();
  request.addEventListener("load", main);
  request.addEventListener("error", e => {
    console.log("Error in JSON request");
  });
  request.open("GET", "/data/projects.json");
  request.send();
};

getProjectData();
