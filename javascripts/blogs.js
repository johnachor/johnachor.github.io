var blogentries = [
  {
    id: "blog1",
    title: "First couple weeks back!",
    date: "March 12, 2018",
    content: "It's good to be back in the saddle!  A crash course through the Treehouse material has me raring to go and feeling freshly smart -- even if I feel like I have to re-teach myself how CSS flex works every time I make a new page.  Looking forward to making a bunch of new friends and learning React instead of Angular this time around.  Here's to a new start!"
  }
];

function createBlogCard(blogObject) {
  var domString = "";
  domString += '<article class="blogpost card" id="' + blogObject.id + '">';
  domString += '<h2 class="blogtitle">' + blogObject.title + '</h2>';
  domString += '<h5 class="blogdate">' + blogObject.date + '</h5>';
  domString += '<p class="blogtext">' + blogObject.content + '</p></article></div>';

  return domString;
}

function writeToDom(blogString) {
  document.getElementById("blog").innerHTML += blogString;
}

function main() {
  blogentries.map(createBlogCard).reverse().forEach(writeToDom);
}

main();