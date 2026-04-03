var person  = {firstname: "Ammar", 
    lastname: "Alha", 
    age: 25,
    gender: "male",
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
};

console.log(person.firstname);

console.log(person["lastname"]);

console.log(person.fullname());

var user = {
    id: "1",
    email: "test@example.com",
    personinfo: {
        name: "Ammar",
        address:{
            line1: "123 Main St",
            line2: "Apt 4B",
            city: "New York",
            zip: "10001"
        }
    }
};

console.log(user.personinfo);
console.log(user.personinfo.name);
console.log(user.personinfo.address);
console.log(user.personinfo.address.city);
