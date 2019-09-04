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

    var calculateTotal = function(type) {
      var sum = 0;
      // callback function below takes each element that we've called 'cur'
      data.allItems[type].forEach(function(cur) {
        sum = sum + cur.value;
      });
      data.totals[type] = sum;
    };


    var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      },
      budget: 0,
      percentage: -1
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



      calculateBudget: function() {

        // calculate total income and expenses
        // call both as function requires type
        calculateTotal('exp');
        calculateTotal('inc');

        // calculate budget; income - expenses
        data.budget = data.totals.inc - data.totals.exp;

        // calculate percentage of income that we spent
        if ( data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }

      },

      getBudget: function() {
        return {
          budget: data.budget,
          totalInc: data.totals.inc,
          totalExp: data.totals.exp,
          percentage: data.percentage
        }
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
    inputButton: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expenseLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage'

  };

  return {
    getInput: function() {
      return {
          type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
          description: document.querySelector(DOMstrings.inputDescription).value,
          value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
              }
    },

    addListItem: function(obj, type) {
      var html, newHtml, element;
      // 1. create html string with placeholder text

      // this is to decide on which html to insert into DOM when item is added, inc or exp depending on input choice
      if (type === 'inc') {
        // choose which class it is
        element = DOMstrings.incomeContainer;
      html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

    } else if ( type === 'exp') {
        element = DOMstrings.expenseContainer;
      html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
    }

      // 2. replace placeholder with actual data
      // replace method literally takes in a specific string (part of html) and replaces it with a given value as a string
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);


      // 3. insert html into DOM
      // this re inserts html into the DOM, 'beforeend' inserts before the end of the element closing tag.
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
    },


    clearFields: function() {
      var fields, fieldsArray;

      // pulls all list items saved to DOM
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

      //tricks js into thinking its already in an array, so can be sliced into another array
      fieldsArray = Array.prototype.slice.call(fields);

      //this allows us to then loop through each input as its in an array, and perform action on each
      fieldsArray.forEach(function(current, index, array) {
          current.value = ""
      });

      // this sets cursor focus back to description box, as that is first element in the array of input fields
      fieldsArray[0].focus();
    },


    displayBudget: function(obj) {

      document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;


      if (obj.percentage > 0) {
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent= "---";
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

  var updateBudget = function() {

    // 1. calculate budget
    budgetCtrl.calculateBudget();

    // 2. return budget
    var budget = budgetCtrl.getBudget();

    // 3. display budget in UI
    UICtrl.displayBudget(budget);

  }


  var ctrlAddItem = function() {
        var input, newItem;

        // 1. get field input data
        input = UICtrl.getInput();

        if (input.value > 0 && !isNaN(input.value) && input.description !== "") {
            // 2. add item to budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. add item to ui
            UICtrl.addListItem(newItem, input.type)

            // clear fields
            UICtrl.clearFields()

            // 4. calculate budget
            updateBudget();

            // 5. display budget on ui
      }
  };


  return {
    init: function() {
      console.log("app has started");
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners();

    }
  }





})(budgetController, UIController);


controller.init();

























//
