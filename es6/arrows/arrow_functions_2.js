// arrow functions 2
// lexical this

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

      var self = this;
      document.querySelector('.green').addEventListener('click', function() {
          var str = 'This is box number ' + self.position + ' and it is ' + self.color;
          alert(str);
      })
    }
}
box5.clickMe();
//callback function, 'this' points to window object not the object object
//to get around this we define variable as this, and use self as this





//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

      document.querySelector('.green').addEventListener('click', () => {
          var str = 'This is box number ' + this.position + ' and it is ' + this.color;
          alert(str);
      })
    }
}
box6.clickMe();
// by using const and the arrow function, 'this' now points to the object itself


// use arrow functions when wanting to preserve the value of this



//ES6
// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//
//       document.querySelector('.green').addEventListener('click', () => {
//           var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//           alert(str);
//       })
//     }
// }
// box66.clickMe();

// if using an arrow function on clickMe, it also takes on the global variable definition for 'this'











//
