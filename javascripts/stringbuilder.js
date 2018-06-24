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
