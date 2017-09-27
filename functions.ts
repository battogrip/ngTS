//optional param (?); required param always first
//function greet(firstname: string, lastname?: string) : void {

//optional param with default value
function greet(firstname: string, lastname: string = "Javier") : void {
    console.log("Hello " + firstname + " " + lastname);
    
}

function areaOfEclipse(r1: number, r2: number = r1) {
    return Math.PI * r1 * r2;
}

//greet("Gino", "Cleofa");
greet("Gino");

var myMath = areaOfEclipse(4);
console.log(myMath);


