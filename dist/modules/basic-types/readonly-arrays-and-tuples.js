let numbers = [10, 20, 30, 40, 50];
//numbers[0] = 30; //não permite que a posição 0 seja alterada
let numberCopy = numbers.map((value) => value * 2);
console.log(numbers);
console.log(numberCopy);
export {};
