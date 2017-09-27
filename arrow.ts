class Greeter {
    firstname = "Gino";

    sayHello() {
        setTimeout(() => {
            console.log("Hello" + this.firstname);   
        }, 500);

    }
}

let greetera = new Greeter();
greetera.sayHello();