var greet = function(name,message) {
    return name  + message;
};

console.log(greet("Somkid", " Hello!"));

//var arrowGreet = (name, message) => {
//    return name + message;
//};


var arrowGreet = (name, message) =>  name + message;
console.log(arrowGreet("Somkid", " Hello!"));

var squrare = x => x * x;

console.log(squrare(5));
