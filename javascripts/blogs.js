var blogentries = [
  {
    id: "blog01",
    title: "First couple weeks back!",
    date: "March 12, 2018",
    content: "It's good to be back in the saddle!  A crash course through the Treehouse material has me raring to go and feeling freshly smart -- even if I feel like I have to re-teach myself how CSS flex works every time I make a new page.  Looking forward to making a bunch of new friends and learning React instead of Angular this time around.  Here's to a new start!"
  },
  {
    id: "blog02",
    title: "Relearning Vanilla Javascript",
    date: "March 14, 2018",
    content: "Now that prework is completely out of the way and we have study groups and Javascript in our toolkit, I'm feeling much more at home again.  I am honestly addicted to just making JS do things with data.  This time around I want to go out of my way to work in with my teammates and write code that they can understand and that fits in with the overall project, rather than expecting everyone to adopt my philosophies."
  },
  {
    id: "blog03",
    title: "Teamwork and Git",
    date: "March 20, 2018",
    content: "New teams today!  I get to be team leader for the first time since I started at NSS.  I think my previous team did a fantastic job of managing our first project, and we had very little in the way of git incidents.  The theme of our team name made for some hilarious song titles on the discography page I got to create."
  },
  {
    id: "blog04",
    title: "ES6!",
    date: "March 26, 2018",
    content: "At long last, I'm allowed to use ES6 again!  A teammate taught me how to use the spread operator on Saturday and I feel like that's a huge shortcut for several array methods.  Also, I independently discovered the element.insertAdjacentHTML() method that enables me to modify the contents of an element without corrupting the other elements inside it and wiping their event listeners.  This is huge for me because that's been a thorn in my side on several projects!"
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