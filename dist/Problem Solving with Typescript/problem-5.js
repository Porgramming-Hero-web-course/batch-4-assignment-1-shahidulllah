"use strict";
//Problem 5:=======>
//Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
const getProperty = (givenObject, key) => {
    return givenObject[key];
};
//Checking
const person = {
    name: "Shahidullah",
    age: 30,
    isAdult: true
};
console.log(getProperty(person, "age"));
console.log(getProperty(person, "name"));
console.log(getProperty(person, "isAdult"));
