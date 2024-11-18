const posts=[
    {title:"post 1", body : "This is post 1"}, 
    {title: "post 2", body: "This is post 2"}
    ];

    function getPost(){
        setTimeout(()=>{
            let output='';
            posts.forEach((post, index)=>{
                output+=`<li>${post.title}</li>`
            })
            document.body.innerHTML=output
        },1000)
    }
    
    function createPost(post,callback){
        setTimeout(()=>{
            posts.push(post);
            callback()
        },2000) 
    }

    //callback
    createPost({title:"Post 3", body:"This is Post 3"}, getPost)