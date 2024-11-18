const NewObject={
    js: "Javasript",
    "cpp": "C++",
    "py": "Python",
    "rb": "Ruby"
}
// console.log(NewObject.cpp)
for (const key in NewObject) {
    // console.log(`${key} -->  ${NewObject[key]}`)
}

const Lnaguages=["js", "c++", "java", "ruby"]
for (const key in Lnaguages) {
    // console.log(Lnaguages[key])
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// for (const [key,value] in map) {
//     console.log(key,value)
// }