function wakeUp() {
    console.log("Hey! Wake up");
}

function sayHello(name) {
    console.log("Hello " + name);
}

function calculateArea(width, height) {
    var area = width * height;
    return area;
}

wakeUp();
sayHello("Ammar");
console.log("พื้นที่: " + calculateArea(6, 18) + " ตารางหน่วย");

var multiply = function(a, b) {
    return a * b;
};

var result = multiply(5, 9);

console.log("ผลคูณ: " + multiply(5, 90));
console.log("ผลคูณ: " + result);