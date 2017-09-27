//Boolean
let isThisVideoDone: boolean = false;

//Numbers
let myNumber: number = 5;

//Text, string
let myName: string = "Gino";

//Template strings
let greeting : string = "Hello, " + myName;
let greeting2 : string = `Hello, " + $(myName)`;

//Arrays
let count1: number[] = [3, 4, 5, 9];
let count2 : Array<number> = [1, 2, 3, 4];
let fruitsList : Array<string> = ['apple', 'banana', 'mango'];

//If you don'y know the type
let anything : any = 4;
anything = 'some text';
anything = false;
anything = 50;

console.log('Hola Gino');

//Retruning nothing
function(name: string) : void {
    console.log("Hola " + name);   
}
//Enums
let joyStickStatus = 1;
enum Directions{Up, Down, Left, Right};
if(joyStickStatus === Directions.Right) {
    //move player to right
}
