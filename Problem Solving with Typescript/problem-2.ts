//Problem 2:========>
/*Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.*/

const removeDuplicates = (numbers: number[]): number[] => {
    const nonDuplicateNumbers: number[]  = [];

    for(let num of numbers){
        if(!nonDuplicateNumbers.includes(num)){
            nonDuplicateNumbers.push(num)
        }
    }

    return nonDuplicateNumbers;
}

const removeD = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
console.log(removeD);