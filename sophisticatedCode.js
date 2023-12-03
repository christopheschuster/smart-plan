/* 
   Filename: sophisticatedCode.js
   Description: This code demonstrates a sophisticated and elaborate JavaScript application that simulates a mini social media platform. 
*/

// User class for creating user objects
class User {
  constructor(username, name, age, location) {
    this.username = username;
    this.name = name;
    this.age = age;
    this.location = location;
    this.posts = [];
  }

  addPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
  }

  likePost(post) {
    post.addLike(this);
  }

  commentOnPost(post, comment) {
    post.addComment(this, comment);
  }
}

// Post class for creating post objects
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.likes = [];
    this.comments = [];
  }

  addLike(user) {
    this.likes.push(user);
  }

  addComment(user, comment) {
    const commentObj = { user, comment };
    this.comments.push(commentObj);
  }

  getFormattedComments() {
    let formattedComments = '';
    for (const commentObj of this.comments) {
      formattedComments += `${commentObj.user.name}: ${commentObj.comment}\n`;
    }
    return formattedComments;
  }
}

// Create users
const user1 = new User('user1', 'John Doe', 25, 'New York');
const user2 = new User('user2', 'Jane Smith', 30, 'Los Angeles');

// User1 creates posts
user1.addPost('Hello world!');
user1.addPost('Happy Friday!');

// User2 creates posts
user2.addPost('I love coding!');
user2.addPost('Weekend vibes!');

// User1 likes User2's post
user1.likePost(user2.posts[0]);

// User2 comments on User1's post
user2.commentOnPost(user1.posts[1], 'Enjoy your weekend!');

// Display posts with likes and comments
for (const user of [user1, user2]) {
  console.log(`${user.name}'s Posts:`);
  for (const post of user.posts) {
    console.log(`- ${post.content}`);
    console.log(`  Likes: ${post.likes.length}`);
    console.log(`  Comments:`);
    console.log(post.getFormattedComments());
  }
  console.log('-----------');
}