"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 4. Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
    let a;
    let b;
    // TODO: assign values to the variables (1,1) and (4,5)
    a = [1, 1];
    b = [4, 5];
    // TODO: create a function which calculates the distance between two points in 2D space
    const x1 = a[0]; // TODO: replace with the first element of p1
    const y1 = a[1]; // TODO: replace with the second element of p1
    const x2 = b[0]; // TODO: replace with the first element of p2
    const y2 = b[1]; // TODO: replace with the second element of p2
    // TODO: calculate the distance
    // function distance(p1: [number, number], p2: [number, number]): number {
    //       p1 = a;
    //       p2 = b;
    //       const x1 = p1[0]; // TODO: replace with the first element of p1
    //       const y1 = p1[1]; // TODO: replace with the second element of p1
    //       const x2 = p2[0]; // TODO: replace with the first element of p2
    //       const y2 = p2[1]; // TODO: replace with the second element of p2
    //       // TODO: calculate the distance
    const distance = Math.hypot((x2 - x1), (y2 - y1));
    return console.log(distance);
}
// TODO: call the function and print the result to console
excercise4();
// TODO: compile and run the code
// 5. Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
    // TODO: declare two variables of type TPoint
    // TODO: assign values to the variables (1,1) and (4,5)
    // TODO: create a function which calculates the distance between two points in 2D space
    let p1 = {
        x: 1, y: 4
    };
    let p2 = {
        x: 4, y: 5
    };
    function distance(p1, p2) {
        // /////variant1
        // const x1 = p1.x; // TODO: replace with the x-coordinate of p1
        // const y1 = p1.y; // TODO: replace with the y-coordinate  of p1
        // const x2 = p2.x; // TODO: replace with the x-coordinate  of p2
        // const y2 = p2.y; // TODO: replace with the y-coordinate  of p2
        // // TODO: calculate the distance
        // // TODO: rewrite code to use distructuring to get x and y from p1 and p2
        const { x: x1, y: y1 } = p1;
        const { x: x2, y: y2 } = p2;
        return Math.hypot((x2 - x1), (y2 - y1));
    }
    console.log(distance(p1, p2));
    // TODO: call the function and print the result to console
}
// TODO: compile and run the code
excercise5();
