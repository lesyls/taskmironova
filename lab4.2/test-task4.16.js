const numbers = [10, 4, 100, -5, 54, 2];

let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
  sumFor += numbers[i] ** 3;
}
console.log('Способ 1 (for):', sumFor);

let sumForOf = 0;
for (let num of numbers) {
  sumForOf += num ** 3;
}
console.log('Способ 2 (for of):', sumForOf); 

let sumForEach = 0;
numbers.forEach(num => {
  sumForEach += num ** 3;
});
console.log('Способ 3 (forEach):', sumForEach);

const sumReduce = numbers.reduce((acc, num) => acc + num ** 3, 0);
console.log('Способ 4 (reduce):', sumReduce);