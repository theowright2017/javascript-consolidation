//

//object literal
var object = {
  firstName: "Theo",
  lastName: "Wright",
  age: 32,
  family: ["Pete", "Amanda"],
  job: {developer: "not yet",
        years: 1}
}

//can access properties of object using either . notation
//OR
//bracket notation and string
console.log(object.age);
console.log(object['age']);


//can also be stored to variable using key and quotation
var key = "firstName"
console.log(object[key]);


//mutate object
object.job['developer'] = "yes";
console.log(object.job);

object.family.push("Vilma");
console.log(object.family);













//
