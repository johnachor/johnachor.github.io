const buildBlogCard = (blogEntry) => {
  return `
  <div class="blog-card card">
    <div class="card-content">
      <span class="card-title">${blogEntry.title.toLowerCase()}</span>
      <p>${blogEntry.content.toLowerCase()}</p>
    </div>
    <div class="card-action">
      <p>${blogEntry.date.toLowerCase()}</p>
    </div>
  </div>
  `;
};

const buildProjectCard = (project) => {
  return `
  <div class="col s12 m6">
    <div class="card project-card sticky-action">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${project.image}">
      </div>
      <div class="card-content">
        <span class="card-title activator">${project.title.toLowerCase()}
          <i class="material-icons right">more_vert</i>
        </span>
        <div class="card-action">
          <p><a href="${project.repo}">check it out on github</a></p>
          ${project.deployed ? '<p><a href="' + project.deployed + '">see the deployed site</a></p>' : ''}
        </div>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${project.title.toLowerCase()}
          <i class="material-icons right">close</i>
        </span>
        <p class="black-text">${project.description.toLowerCase()}</p>
      </div>
    </div>
  </div>
  `;
};

module.exports = {
  buildBlogCard,
  buildProjectCard,
};
