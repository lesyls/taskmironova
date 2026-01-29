const getSumOfNumbers = function(number, type = "odd") {
    let sum = 0;
    
    for (let i = 0; i <= number; i++) {
        if (type === "odd" && i % 2 !== 0) {
            sum += i;
        } else if (type === "even" && i % 2 === 0) {
            sum += i;
        } else if (type === "") {
            sum += i;
        }
    }
    
    return sum;
};

console.log("number = 10, type = 'odd':", getSumOfNumbers(10, 'odd'));
console.log("number = 10, type = 'even':", getSumOfNumbers(10, 'even')); 
console.log("number = 10, type = '':", getSumOfNumbers(10, '')); 