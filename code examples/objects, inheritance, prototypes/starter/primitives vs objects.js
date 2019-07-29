//primitives vs objects

//variables containing primitives, hold that data within the variable itself

// variables containing objects don't contain the object, they contain a reference to memory where object is stored


//primitives
var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);

// both hold same reference to point in memory for object
//works in the same way for functions


//objects
var obj1 = {
  name: "John",
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);



//functions
var age = 27;
var obj = {
  name: "jonas",
  city: "Lisbon"
};

function change(a,b){
  a = 30;
  b.city = "san francisco";
}
// b.city is not passing object, just passes reference

change(age, obj);

console.log(age);
console.log(obj.city);



//main takeaway from this is that strange bugs can occur as a result of not knowing the difference between how these interact differently with javascript compiler

// variables contain the actual primitve data, and therefore when a variable is changed, the actual data content is changed

// for objects, they only contain a reference to where the object data is stored, therefore when a variable is changed, its changing the reference, and if a variable is not directly accessed, then it still contains original reference, i.e the object itself doesn't change



















//
