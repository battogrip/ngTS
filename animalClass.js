var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//abstract class Animal { --> class can only be extended, not initiated
var Animal = (function () {
    //call this class
    function Animal(theName) {
        this.name = theName;
    }
    //method
    Animal.prototype.walk = function (distance) {
        console.log("Hi my dog's name is" + this.name + "Iam walking" + distance + "meter");
    };
    return Animal;
}());
var myAnimal = new Animal("Tuki");
myAnimal.walk(50);
//inherit all feartures from Animal class
var Snake = (function (_super) {
    __extends(Snake, _super);
    //redefine constructor
    function Snake(theName) {
        //call parent class with 'theName' from snake class/constructor
        return _super.call(this, theName) || this;
    }
    //override method from parent class
    Snake.prototype.walk = function (distance) {
        console.log("snake don't walk");
    };
    return Snake;
}(Animal));
