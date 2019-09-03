//ES5
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);




//ES6
Person.prototype.myFriends6 = function(friends) {

    const arr = friends.map(el =>
      `${this.name} is friends with ${el}`);
    ;

    console.log(arr);
}

new Person('John').myFriends6(friends);










//
