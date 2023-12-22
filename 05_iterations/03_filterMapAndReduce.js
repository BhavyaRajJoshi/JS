const coding = ["js" , "ruby" , "java" , "python"]

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// console.log(values)


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return  num > 4
// })


// console.log(newNums)


const books = [
    {
        title : 'Book One' , genre : 'Fiction' , publish : 1998 , 
        edition : 2017
    },
    {
        title : 'Book two' , genre : 'History' , publish : 1998 , 
        edition : 2017
    },
    {
        title : 'Book three' , genre : 'Non Fiction' , publish : 1998 , 
        edition : 2017
    },
    {
        title : 'Book four' , genre : 'Economics' , publish : 1998 , 
        edition : 2017
    },
    {
        title : 'Book five' , genre : 'History' , publish : 1998 , 
        edition : 2017
    },
    {
        title : 'Book six' , genre : 'science' , publish : 1998 , 
        edition : 2017
    },
    
]

const userBooks = books.filter( (bk) => bk.genre === 'History')

// console.log(userBooks)

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNumbers = myNumbers.map( (num) => num + 10)

const newNumbers = myNumbers
                    .map( (num) => num * 10 )
                    .map( ((num) => num + 1))
                    .filter( ((num) => num >= 41))

//console.log(newNumbers)

array1 = [1,2,3,4,5]
const initialValue = 0;
const sum = array1.reduce(
    (accumulator , currVal) => accumulator + currVal,
    initialValue
)

console.log(sum)