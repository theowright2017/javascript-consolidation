// first identify most fundamental things app will do
/* ui module --
      get input
      add new item to ui
      update ui

  data module --
      add new item to data structure
      calculate budget

  controller module
      link other two modules
      control entire app
      add event handler
      specify response

*/


// BUDGET CONTROLLER
var budgetController = (function() {

// var exp = new Expense
// 'new' applies the Expense function to a new object, meaning that 'this' can now apply to the Expense object
    var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };

// these function constructors / objects are PRIVATE
    var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };


    var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      }
    };

    return {
      addItem: function(type, des, val) {
          var newItem, ID;


          // makes id the last id of the array, length - 1 = index
          //data.allItems[inc][8].id + 1
          if (data.allItems[type].length > 0){
          ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
        } else {
          ID = 1;
        }

          //create new item from inc or exp type
          if (type === 'exp') {
            newItem = new Expense(ID, des, val);
          } else if (type === 'inc') {
            newItem = new Income(ID, des, val);
          }

          // depending on if type is inc or exp, will depend on which array it gets pushed to
          // push into data structure
          data.allItems[type].push(newItem);

          // return new element
          return newItem;
      },

      testing: function() {
        console.log(data);
      }
    };

})();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// UI CONTROLLER
var UIController = (function() {

  var DOMstrings = {
    inputType:  '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'
  };

  return {
    getInput: function() {
      return {
          type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
          description: document.querySelector(DOMstrings.inputDescription).value,
          value: document.querySelector(DOMstrings.inputValue).value
              }
    },

    // pass DOMstrings object to other module via function
    // by turning into function this exposes to public scope as function can be called outside
    getDOMstrings: function() {
      return DOMstrings;
    },

    showItems: function() {
      return
    }

  // remember everything goes within return {};
  };

})();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
        }
    });
  };



  var ctrlAddItem = function() {
        var input, newItem;

        // 1. get field input data
        input = UICtrl.getInput();

        // 2. add item to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. add item to ui

        // 4. calculate budget

        // 5. display budget on ui
  };


  return {
    init: function() {
      console.log("app has started");
      setupEventListeners();
    }
  }





})(budgetController, UIController);


controller.init();

























//
