// References to DOM elements
const blogForm = document.getElementById('blogForm');
const blogPostsContainer = document.getElementById('blogPosts');
const modeToggleBtn = document.getElementById('modeToggle');

// Event listener
blogForm.addEventListener('submit', function(event){
    event.preventDefault();
});

// Render blog posts
function renderBlogPosts() {
   
}

// Event listener for toggle mode
modeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

renderBlogPosts();
