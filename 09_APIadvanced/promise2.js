const promiseone= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        const error=false
        if(!error){
            // console.log('Async Task is completed !');
            resolve("Hello Ayush")
        }
        else{
            reject("Rejected!")
        }
        
    },2000)
})

// promiseone.then(res => console.log(res))
// .catch(res => console.log(res))


function promiseTwo(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error=true
        if(!error){
           
            resolve(fetch("https://jsonplaceholder.typicode.com/comments"))
        }
        else{
            reject("Error!")
        }
        
    },1000)
})}

// handling using .then .catch 
promisecatched=promiseTwo();
promisecatched.then(data => data.json())
.then(res=> console.log(res))
.catch(res=> console.log(res))


// Handling using aync await

async function fetchUser() {
    try {
        const response= await promiseTwo()
        const Data= await response.json()
        console.log(Data)
    } catch (error) {
        console.log(error);
        
    }
    
}
// fetchUser()


fetch('https://api.github.com/users/ayush88-debug')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))