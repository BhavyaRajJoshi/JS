//falsy values 
//false , 0 -0 , BigInt 0n, "", null, undefined, NaN

//truthy
//"0", 'false', [], {} , function(){} 


// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10 ?? 20
val1   = null ?? 10 ?? 20

console.log(val1)


const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
