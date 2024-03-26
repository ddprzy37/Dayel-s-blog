function renderBlogPosts() {
    // pull blog posts
    let existingPosts = localStorage.getItem('blogPosts');

    if (existingPosts !== null) {
        existingPosts = JSON.parse(existingPosts);
        const blogPostsContainer = document.getElementById('blogPosts');
        
        for (let i = 0; i < existingPosts.length; i++) {
            const postDiv = document.createElement('div');
            const usernameHeading = document.createElement('h3');
            const titleHeading = document.createElement('h2');
            const contentParagraph = document.createElement('p');

            usernameHeading.textContent = existingPosts[i].username;
            titleHeading.textContent = existingPosts[i].title;
            contentParagraph.textContent = existingPosts[i].content;

            postDiv.appendChild(usernameHeading);
            postDiv.appendChild(titleHeading);
            postDiv.appendChild(contentParagraph);
            blogPostsContainer.appendChild(postDiv);
        }
    } else {
        console.log("No posts yet.")
    }
}
console.log(renderBlogPosts);