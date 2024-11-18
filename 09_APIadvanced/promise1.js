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
    
    function createPost(post){

        return  new Promise((resolve, reject)=>{
            setTimeout(()=>{
                posts.push(post);

                let error = false;
                if(!error){
                    resolve()
                }
                else{
                    reject("Something went wrong")
                }
            },2000) 
        })
    }

    // then / catch

    // createPost({title:"Post 3", body:"This is Post 3"}).then(getPost)
    // .catch(res => console.log(res))  


    // Async / await

    async function init()  {
        const data = await createPost({title:"Post 3", body:"This is Post 3"})
        getPost()
        console.log('Async await is executed ');
        
    }
    // init()   //....call function


    //async await  using fetch
    async function fetchUser() {
        try {
            const user=await fetch("https://jsonplaceholder.typicode.com/comments");

            const data= await user.json()
            console.log(data)
        } catch (error) {
            console.log(error);
            
        }
    }
    // fetchUser()


    // Promise.all
    const promiseOne = Promise.resolve('Hello world')
    const promiseTwo =10
    const promisethree= new Promise((resolve, reject)=>{
        setTimeout(resolve,2000, "Good bye" )
    })

    // Promise.all([promiseOne,promiseTwo,promisethree]).then(data => console.log(data))


    // This is how to handle promise
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(data => data.json())
    .then(res=> console.log(res))
    .catch(res=> console.log(res))
