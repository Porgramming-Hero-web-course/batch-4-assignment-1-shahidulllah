"use strict";
//Problem 4:=======>
//Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
//Function
const calculateShapeArea = (shape) => {
    if (shape.shape === "circle") {
        const circleArea = parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
        return circleArea;
    }
    else if (shape.shape === "rectangle") {
        const rectangleArea = shape.height * shape.width;
        return rectangleArea;
    }
    else {
        return 0;
    }
};
//Checking Result
const circleArea = calculateShapeArea({ shape: 'circle', radius: 2 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
console.log(rectangleArea);
