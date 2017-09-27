//Boolean
var isThisVideoDone = false;
//Numbers
var myNumber = 5;
//Text, string
var myName = "Gino";
//Template strings
var greeting = "Hello, " + myName;
var greeting2 = "Hello, \" + $(myName)";
//Arrays
var count1 = [3, 4, 5, 9];
var count2 = [1, 2, 3, 4];
var fruitsList = ['apple', 'banana', 'mango'];
//If you don'y know the type
var anything = 4;
anything = 'some text';
anything = false;
anything = 50;
console.log('Hola Gino');
//Retruning nothing
function (name) {
    console.log("Hola " + name);
}
//Enums
var joyStickStatus = 1;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
if (joyStickStatus === Directions.Right) {
    //move player to right
}
