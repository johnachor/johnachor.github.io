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

function createProjectCard(blogObject) {
  var domString = "";
  domString += '<div class="project card" id="' + blogObject.id + '">';
  domString += '<img src="' + blogObject.imageUrl + '" class="project-img">';
  domString += '<h2 class="project-title">' + blogObject.title + "</h2>";
  domString +=
    '<p class="project-description">' + blogObject.description + "</p>";
  domString +=
    '<p><a class="githublink" href="' +
    blogObject.githubUrl +
    '"><img class="socialmedia" src="/img/github.png" alt="Github logo"></a></p>';
  domString += "</div>";

  return domString;
}

function writeToDom(blogString) {
  document.getElementById("projects").innerHTML += blogString;
}

function main() {
  projects.map(createProjectCard).forEach(writeToDom);
}

main();
