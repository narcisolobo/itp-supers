// Datatypes:
// 
// Numbers: for example, 3, or 5.89
// Strings: for example, "Narciso Lobo"
// Booleans: for example, true or false

// Collections
// Arrays:
// [9, "Lobo", true, [1, 2, 3]]
// 
// Objects:
// {
//  "name" : "Narciso Lobo",
//  "occupation" : "Instructor"
//  "isAlive" : true,
//  "age" : 49
// }

// Creating a variable is like creating a box with a label on it.

var num = 6
var name = "Narciso Lobo"
var isAlive = true

var myArray = [9, "Lobo", true, [1, 2, 3]]
var me = {
    "name" : "Narciso Lobo",
    "occupation" : "Instructor",
    "isAlive" : true,
    "age" : 49
}

// Print the numbers 1 to 255.

// i++ is another way of writing i = i + 1

// for (var i = 1; i <= 255; i++){
//     console.log(i)
// }

// var sequence = [3, 6, 1, 77, 90, 4, 2, 7]
//              // 0  1  2   3   4  5  6  7

// var sum = 0
// for (var i = 0; i < sequence.length; i++){
//     sum = sum + sequence[i]
//     console.log("i is now: " + i + " sum is now: " + sum)
// }
// console.log(sum)

// var myNum = 10
// while(myNum >= 0){
//     console.log("loop number " + myNum)
//     myNum--
// }

for(var key in me){
    console.log(`${key}: ${me[key]}`)
}

