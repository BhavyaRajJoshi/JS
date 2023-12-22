// const myObject = {
//     js : 'javascript',
//     cpp : 'c++',
//     py : 'python'
// }

// for(const key in myObject){
//     console.log(`${key}. shortcut for ${myObject[key]}`)
// }


// const map = New Map()
// map.set('In' : "INDIA")
// map.set('US' : "USA")



 const coding = ["js" , "ruby" , "java" , "python"]

//coding.forEach( function (val){
//     console.log(val);

// })


// coding.forEach( (item) => {
//     console.log(item)
// })
 //

// function printMe(item){
//     console.log(item);
// }

// coding.forEach( (item , index , arr) => {
//     console.log(item , index,arr)
// })



const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
]


myCoding.forEach( (key) => {
    console.log(key.languageFileName)
})