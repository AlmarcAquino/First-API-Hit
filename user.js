// Globals
const postListEl = document.querySelector('.post-list');
const mountUserID = localStorage.getItem('userID');


// Calls API and gets post data based on userID 
// Edits HTML to add retrieved data
// ID param used when called by onSearchChange function
async function renderPosts(id) {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const postData = await posts.json();
  postListEl.innerHTML = postData.map(post => postHTML(post)).join("");
}


// Triggered when input search field is changed
async function onSearchChange(event) {
  const searchUserID = event.target.value;
  renderPosts(searchUserID);
}

renderPosts(mountUserID);


// String template filled in with post information
function postHTML(post) {
  return `
  <div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
}
