const Mynums= [1,2,3,4,5,6,7,8,9,10]

// let newNums= Mynums.map((item)=> {
//    return item+10
// })


// Chaining
const newNums=Mynums.map((item)=> item*10)
                    .map((item)=>(item+1))
                    .filter((item)=> item>40)


console.log(newNums)