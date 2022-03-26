

const btnCreatePost = document.querySelectorAll(".btn-create-post")[0];

const driver = new Driver();



btnCreatePost.addEventListener("click", e => {
    driver.highlight('#create-post');
})




