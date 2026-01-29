function getDivisorsCount(number = 1) {
    if (number < 0 || !Number.isInteger(number)) {
        alert("number должен быть целым числом и больше нуля");
        return;
    }
    
    let count = 0;
    
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    
    return count;
}

console.log("getDivisorsCount(4):", getDivisorsCount(4));
console.log("getDivisorsCount(5):", getDivisorsCount(5)); 
console.log("getDivisorsCount(12):", getDivisorsCount(12)); 
console.log("getDivisorsCount(-5):", getDivisorsCount(-5));