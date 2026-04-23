function sayHi(name){
    var name = name || 'Chai';
    console.log("Hi " + name);
}
sayHi();

function sayHi(name= 'Chai'){
console.log("Hi" + name);
}
sayHi();