function renderBlogPosts() {
    // pull blog posts
    let existingPosts = localStorage.getItem('blogPosts');

    if (existingPosts !== null) {
        existingPosts = JSON.parse(existingPosts);
        const blogPostsContainer = document.getElementById('blogPosts');
        
        for (let i = 0; i < existingPosts.length; i++) {
            const postDiv = document.createElement('div');
            const authorHeading = document.createElement('h2');
            const titleHeading = document.createElement('h3');
            const contentParagraph = document.createElement('p');

            authorHeading.textContent = existingPosts[i].Author; 
            titleHeading.textContent = existingPosts[i].Title; 
            contentParagraph.textContent = existingPosts[i].Content; 

            postDiv.appendChild(authorHeading);
            postDiv.appendChild(titleHeading);
            postDiv.appendChild(contentParagraph);
            blogPostsContainer.appendChild(postDiv);
        }
    } else {
        console.log("No posts yet.")
    }
}
renderBlogPosts();

console.log(renderBlogPosts);