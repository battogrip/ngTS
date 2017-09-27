var Greeter = (function () {
    function Greeter() {
        this.firstname = "Gino";
    }
    Greeter.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hello" + _this.firstname);
        }, 500);
    };
    return Greeter;
}());
var greetera = new Greeter();
greetera.sayHello();
