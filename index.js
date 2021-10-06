//1
const absoluteValue = (num) => {
    if (typeof num === 'number') { 
        if (num < 0) {
            return num;
        } else {
            return num*-1;
            } 
               } else {
                   return null;
    } 
}


console.log(absoluteValue(-20))


const multiplesOfFourAndSix = () => {
    let array = [];
    for (let i = 1; i <= 100; i++){
        if (i % 4 === 0 && i % 6 === 0){
            array.push(i)
        }
    } 
    return array;
}

console.log(multiplesOfFourAndSix())