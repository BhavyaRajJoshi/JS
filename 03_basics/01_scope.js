//curly braces are the scope


one()
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
        
    }
    //console.log(website)

    two()
}



const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5))
