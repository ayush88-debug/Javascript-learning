const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(val){
//     console.log(val)
// })

// coding.forEach((item)=>{
//     console.log(item)
// })

const printMe=function(value,index){
    console.log(value, index)
}

// coding.forEach(printMe)   

// coding.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })

const Mycoding=[
    {
        languageNmae: "Javascript",
        languageFile:"js"
    },
    {
        languageNmae: "Python",
        languageFile: "py"
    },
    {
        languageNmae: "C++",
        languageFile:"cpp"
    }
]

Mycoding.forEach( (item,index,arr)=>{
    console.log(item.languageNmae);
    console.log(Mycoding[index].languageFile);
    // console.log(arr)
    
}) 