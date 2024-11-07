"use strict";
//Problem 3:=======>
//Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
const countWordOccurrences = (givenSentence, givenWord) => {
    const sentenceInLowerCase = givenSentence.toLowerCase();
    const wordInLowerCase = givenWord.toLowerCase();
    const words = sentenceInLowerCase.split(" ").filter(w => w === givenWord);
    const wordCount = words.length;
    return wordCount;
};
const letsCount = countWordOccurrences("I love typescript", "typescript");
console.log(letsCount);
