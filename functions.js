//optional param (?); required param always first
//function greet(firstname: string, lastname?: string) : void {
//optional param with default value
function greet(firstname, lastname) {
    if (lastname === void 0) { lastname = "Javier"; }
    console.log("Hello " + firstname + " " + lastname);
}
function areaOfEclipse(r1, r2) {
    if (r2 === void 0) { r2 = r1; }
    return Math.PI * r1 * r2;
}
//greet("Gino", "Cleofa");
greet("Gino");
var myMath = areaOfEclipse(4);
console.log(myMath);
