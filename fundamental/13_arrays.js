var name = ["Ammar","john","michael","sara"];
var fruits = new Array("apple","banana","orange","grape");
/*console.log(name);

console.log(typeof(name));

console.log(name[0]);*/

var firstname = ["don","michael","sara","john"];
console.log(firstname[0]);
console.log(firstname[1],firstname[3]);

firstname[1] = "michael";
console.log(firstname);

firstname[4] = "jane";
console.log(firstname);

for(var i = 0; i < firstname.length; i++) {
    console.log(firstname[i]);
}

fruits.forEach(myFruit);

function myFruit(value) {
    console.log(value);
}