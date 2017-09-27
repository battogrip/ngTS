//abstract class Animal { --> class can only be extended, not initiated
class Animal {
        
    private name: string;

    //call this class
    constructor(theName: string) {
        this.name = theName;
    }

    //method
    walk(distance: number) {
        console.log("Hi my dog's name is" + this.name + "Iam walking" + distance + "meter");
        
    }

}

let myAnimal = new Animal("Tuki");
myAnimal.walk(50);

//inherit all feartures from Animal class
class Snake extends Animal {

    //redefine constructor
    constructor(theName: string) {
        //call parent class with 'theName' from snake class/constructor
        super(theName);       
    }

    //override method from parent class
    walk(distance: string) {
        console.log("snake don't walk");
        
    }

}

class Customer {
    public CustomerName: string = "";
    ValidateMethode() : boolean {
        alert("test");
        return true;
    }
}