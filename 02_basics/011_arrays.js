
const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(1,3,5,7)

myArr.push(6)

// myArr.unshift(50)

// myArr.pop()

// myArr.shift()

// console.log(myArr.includes(8))
// console.log(myArr.indexOf(4))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)


///slice and splice

console.log("A" , myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("D" , myArr)

const myn2 = myArr.splice(1,3)

console.log(myn2)
console.log("C" , myArr)