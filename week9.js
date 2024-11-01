function myFunction() {
    setTimeout(()=>{
        console.log("first task")
    },3000)
}
console.log("second task");

const myPosts = [
    {title: "Post one", body: "body one"},
    {title: "Post two", body: "body two"}

]

function getPosts() {
    setTimeout(()=>{
        let content = "";
        myPosts.forEach((post)=>{
            console.log(post);
        content += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = content;
    },1000);
}
getPosts()

function createPost(post, callBack) {
    setTimeout(()=> {
        myPosts.push(post);
        callBack();
    },2000);
}

createPost(
    {
        title: "Posts Four",
        body: "Body four",
    }, 
    getPosts
);
// createPost(
//     {title: "Post three", body: "body three"},
//     getPosts
//     // {title: "Post four", body: "body four"}
// );

const myPromise = new Promise((resolved, reject) => {
// console.log(resolved);
setTimeout(()=> {
    resolved("I am done!");
    reject("error occured");
    console.log("Task Completed");
}, 5000);

// if (resolved) {
//     resolved("I am resolved");
// }else if(rejected) {
//     reject("rejected");
// }
});

myPromise.then((resolved, reject) => {
    console.log(resolved);
    console.log(reject);
});

console.log(myPromise);

// const request = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((data) => data.json())
// .then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.error(error);
//     console.log(error);
// }).finally(() => {
//     console.log("Finally executed");
// })

const myRequest = async () => {
    const base_url = 'https://jsonplaceholder.typicode.com/todos/1';
    try {
        const request = await fetch(base_url);
        const response = await request.json();
        console.log(response);
    } catch (error) {
       console.log(error); 
    }  
};

setTimeout(() => {
    myRequest();
}, 3000);

myRequest();