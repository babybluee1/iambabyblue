// Handle profile picture upload
function uploadProfilePic(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      document.getElementById("profile-pic").src = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

// Handle increase in followers
function increaseFollowers() {
  let followersCount = parseInt(document.getElementById("followers-count").innerText.replace(',', ''));
  followersCount += 1;
  document.getElementById("followers-count").innerText = followersCount.toLocaleString();
  saveFollowersCount(followersCount);
}

// Save the followers count to local storage
function saveFollowersCount(count) {
  localStorage.setItem("followersCount", count);
}

// Load saved followers count from local storage
function loadFollowersCount() {
  const savedCount = localStorage.getItem("followersCount");
  if (savedCount) {
    document.getElementById("followers-count").innerText = parseInt(savedCount).toLocaleString();
  }
}

// Show the sign-up form
function showSignupForm() {
  document.getElementById("signup-form-container").style.display = "block";
}

// Handle sign-up form submission
function submitSignup(event) {
  event.preventDefault();
  alert("Sign-up form submitted!");
  // Here you could send the data to a server for processing
}

// On page load, load the followers count
window.onload = function () {
  loadFollowersCount();
};
