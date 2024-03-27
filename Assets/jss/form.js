function renderBlogPosts() {
    // pull blog posts
    let existingPosts = localStorage.getItem('blogPosts');

    if (existingPosts !== null) {
        existingPosts = JSON.parse(existingPosts);
        const blogPostsContainer = document.getElementById('blogPosts');
        blogPostsContainer.innerHTML = '';
        
        for (let i = 0; i < existingPosts.length; i++) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('blog-post'); // Add class for styling
            
            const titleHeading = document.createElement('h2');
            titleHeading.classList.add('blog-post-title'); // Add class for styling
            titleHeading.textContent = existingPosts[i].Title; // Use Title property
            
            const contentParagraph = document.createElement('p');
            contentParagraph.classList.add('blog-post-content'); // Add class for styling
            contentParagraph.textContent = existingPosts[i].Content; // Use Content property

            const authorParagraph = document.createElement('p');
            authorParagraph.classList.add('blog-post-author'); // Add class for styling
            authorParagraph.textContent = 'By: ' + existingPosts[i].Author; // Use Author property

            postDiv.appendChild(titleHeading);
            postDiv.appendChild(contentParagraph);
            postDiv.appendChild(authorParagraph);
            blogPostsContainer.insertBefore(postDiv, blogPostsContainer.firstChild); // Insert at the beginning
        }
    } else {
        console.log("No posts yet.")
    }
}

renderBlogPosts();

console.log(renderBlogPosts);