// const posts = [

//     {
//         title: `this is title 1`,
//         body: `this is body 1`,
//     },

//     {
//         title: `this is title 2`,
//         body: `this is body 2`,
//     },

//     {
//         title: `this is title 3`,
//         body: `this is body 3`,
//     },

//     {
//         title: `this is title 4`,
//         body: `this is body 4`,
//     }
// ];

// selection

const postsElement = document.querySelector('.posts');

const fetchData = async function(config){

    try{
        const res = await axios(config);

        return res.data;

    }catch(err){

        throw Error("data is not fetched");
    }

    console.log(res.data);
};




const loadAllData = async () => {

    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

    posts.map(function(post){
        
        const postElement = document.createElement("div");

        postElement.classList.add("post");

        postElement.innerHTML = `
        <h1 class="post-titile">${post.title}</h1>
        <p class="post-body"> ${post.body}</p>`;

        postsElement.appendChild(postElement);
    })
}

loadAllData();