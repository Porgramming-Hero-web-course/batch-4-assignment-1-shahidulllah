//Problem 1:==============>
/*Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.*/

function sumArray (numbers: number[]): number{
   
    const sum = numbers.map(num => num).reduce((prev, num) => prev + num, 0);
    

    return sum;
}

const getSum = sumArray([1, 2, 3,52])
console.log(getSum);