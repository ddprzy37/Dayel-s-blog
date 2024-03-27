// References to DOM elements
const blogForm = document.getElementById('blogForm');
const blogPostsContainer = document.getElementById('blogPosts');
const modeToggleBtn = document.getElementById('modeToggle');

// Event listener
blogForm.addEventListener('submit', function(event){
    event.preventDefault();

    // Input values
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    console.log('Submitted Data:', username, title, content); //debug
    // Create a post
    const blogPost = {
        Author: username,
        Title: title,
        Content: content,
    }

    // Save post
    saveBlogPost(blogPost);

    //Redirect to posts page
    window.location.href = 'index.html'

    // Clear data fields
    blogForm.reset();
});

// Send blog post to local storage
function saveBlogPost(blogPost) {
    let existingPosts = localStorage.getItem('blogPosts');
    if (existingPosts !== null) {
        existingPosts = JSON.parse(existingPosts);
    } else {
        existingPosts = [];
    }

    // Add new posts the the existing array
    existingPosts.push(blogPost);
    console.log('Updated Posts:', existingPosts); //debug
    // Store new array
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
}

// Render blog posts
function renderBlogPosts() {
   
}

// Event listener for toggle mode
modeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

renderBlogPosts();