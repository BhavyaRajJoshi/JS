
//break and continue

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("5 is detected")
        continue;
    }
    console.log(`value of i is ${index}`)
    if (index == 6) {
        console.log("6 detected")
        break;
    }
    
}