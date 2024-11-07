//Problem 3:=======>
//Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.


const countWordOccurrences = (givenSentence: string, givenWord: string): number => {
    const sentenceInLowerCase = givenSentence.toLowerCase();
    const wordInLowerCase = givenWord.toLowerCase();

    const words = sentenceInLowerCase.split(" ").filter(w => w.replace(/\W/g, "") === givenWord);

    const wordCount = words.length;

    return wordCount;
}

const letsCount = countWordOccurrences('this is my name. this name is is is is very awesome.Which is very amazing as well', "is")

console.log(letsCount);