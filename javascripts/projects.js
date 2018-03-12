var projects = [
  {
    id: "project1",
    title: "Achortown",
    imageUrl: "/img/kitten.jpg",
    description: "This is where John goes to pet kitties. They are very sweet and beautiful kitties and they make John happy.",
    githubUrl: "https://github.com/johnachor/fakeproject"
  },
  {
    id: "project2",
    title: "Achortown",
    imageUrl: "/img/kitten.jpg",
    description: "This is where John goes to pet kitties. They are very sweet and beautiful kitties and they make John happy.",
    githubUrl: "https://github.com/johnachor/fakeproject"
  },
  {
    id: "project3",
    title: "Achortown",
    imageUrl: "/img/kitten.jpg",
    description: "This is where John goes to pet kitties. They are very sweet and beautiful kitties and they make John happy.",
    githubUrl: "https://github.com/johnachor/fakeproject"
  },
  {
    id: "project4",
    title: "Achortown",
    imageUrl: "/img/kitten.jpg",
    description: "This is where John goes to pet kitties. They are very sweet and beautiful kitties and they make John happy.",
    githubUrl: "https://github.com/johnachor/fakeproject"
  },
  {
    id: "project5",
    title: "Achortown",
    imageUrl: "/img/kitten.jpg",
    description: "This is where John goes to pet kitties. They are very sweet and beautiful kitties and they make John happy.",
    githubUrl: "https://github.com/johnachor/fakeproject"
  },
  {
    id: "project6",
    title: "Achortown",
    imageUrl: "/img/kitten.jpg",
    description: "This is where John goes to pet kitties. They are very sweet and beautiful kitties and they make John happy.",
    githubUrl: "https://github.com/johnachor/fakeproject"
  }
];

function createProjectCard(projectObject) {
  var domString = "";
  domString += '<div class="project card" id="' + projectObject.id + '">';
  domString += '<img src="' + projectObject.imageUrl + '" class="project-img">';
  domString += '<h2 class="project-title">' + projectObject.title + "</h2>";
  domString +=
    '<p class="project-description">' + projectObject.description + "</p>";
  domString +=
    '<p><a class="githublink" href="' +
    projectObject.githubUrl +
    '"><img class="socialmedia" src="/img/github.png" alt="Github logo"></a></p>';
  domString += "</div>";

  return domString;
}

function writeToDom(projectString) {
  document.getElementById("projects").innerHTML += projectString;
}

function main() {
  projects.map(createProjectCard).forEach(writeToDom);
}

main();
