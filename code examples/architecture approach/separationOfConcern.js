// in the code, there are now two reusable modules that have no relation, and the third is what makes them interact..  if any module is changed, simply the input name needs to change which keeps each module individual

//this is same concept as java, seperation of concern is good




//module
var budgetController = (function(){
  var x = 23;

  var add = function(a) {
    return x + a;
  }

  return {
    publicTest: function(b) {
      return add(b);
    }
  }

})();

// independant modules
// no relation, seperation of concerns


//module
var uIController = (function() {

  // code

})();


//module
var controller = (function(budgetCtrl, UICtrl) {

  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  }

})(budgetController, uIController);
