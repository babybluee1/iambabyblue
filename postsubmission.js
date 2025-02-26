// Handle the post submission
function submitPost() {
  const postContent = document.getElementById('post-content').value;

  // Check if the post content is not empty
  if (postContent.trim() !== "") {
    // Create a new post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.textContent = postContent;

    // Add the new post to the posts list
    const postsList = document.querySelector('.posts-list');
    postsList.appendChild(postElement);

    // Clear the textarea
