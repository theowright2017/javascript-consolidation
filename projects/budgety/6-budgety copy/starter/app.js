// independant modules
// no relation, seperation of concerns
// IIFE's to encourage data privacy



//module
//BUDGET CONTROLLER
var budgetController = (function(){



    var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };



    var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };


    var calculateTotal = function(type) {
      var sum = 0;
      data.allItems[type].forEach(function(cur){
          sum += cur.value;
      });
      data.totals[type] = sum;
    };

    // var allExpenses = [];
    // var allIncomes = [];
    // var totalExpenses = 0

            var data = {
              allItems: {
                exp: [],
                inc: []
              },
              totals: {
                expenses: 0,
                incomes: 0
              },
              budget: 0,
              percentage: -1
            };


    return {
      addItem: function(type, des, val) {
        var newItem, ID;


        //id = last id + 1

        //gets last item in exp or inc array, and assigns the new item id based on this plus 1
        if (data.allItems[type].length > 0){
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      //create new item object depending on exp or inc
        if (type === 'exp'){
          newItem = new Expense(ID, des, val);
        } else if (type === 'inc'){
          newItem = new Income(ID, des, val);
        }

        // push new item into inc or exp item array
        data.allItems[type].push(newItem);

        // return new item for further use
        return newItem;
      },



      deleteItem: function(type, id) {
        var ids, index;
        //need to create array with id's and then match id, as choosing by index they may not be in order

        var ids = data.allItems[type].map(function(current){
          return current.id; // returns array of ids

        });

        index = ids.indexOf(id);


        if (index !== -1) {
          data.allItems[type].splice(index, 1)
          //1 is number of elements to remove at index
        }


      },



      calculateBudget: function() {

        // calculate total income and expenses
          calculateTotal('exp');
          calculateTotal('inc');

        // calculate budget : income - expenses
          data.budget = data.totals.inc - data.totals.exp;

        // calculate % of income spent
          if (data.totals.inc > 0){
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100 );
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
        //to access 'data' in the DOM
      }
    };

})();







//module
//UI CONTROLLER
var uIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expenseContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expenseLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container"
  };

  return {
    getInput: function(){
        return{
          type: document.querySelector(DOMstrings.inputType).value,  //either inc or exp
          description: document.querySelector(DOMstrings.inputDescription).value,
          value: parseFloat(document.querySelector(DOMstrings.inputValue).value
        )
        }



    },

    addListItem: function(obj, type) {

      var html, newHTML, element;

      //create html string with placeholder text
      if (type === 'inc'){
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      } else if (type === 'exp'){
        element = DOMstrings.expenseContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }

      //replace placeholder with actual data
      //replace searches for string and replaces it with string input to method
      newHTML = html.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.description);
      newHTML = newHTML.replace('%value%', obj.value);

      // insert html into the DOM
      //take the html above, after the placeholders have been replaced, and reinsert new html back into DOM, to update the DOM itself with new values
      document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
    },

    deleteListItem: function(selectorID) {
        var element = document.getElementById(selectorID)

        element.parentNode.removeChild(element)

    },



    clearFields: function() {
      var fields, fieldsArray;

      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
      // console.log(fields);

      //tricks slice method into thinking fields is an array,
      // will return fields as an array
      fieldsArray = Array.prototype.slice.call(fields);

      //current = current element selected
      fieldsArray.forEach(function(current, index, array) {
          current.value = ""; // value of each array element
      });
      // console.log(fieldsArray);
      fieldsArray[0].focus();

    },

    displayBudget: function(obj) {

        document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
        document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
        document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;

      if ( obj.percentage > 0) {
          document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
          document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();




/////////////////////////////////////////


//module
// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {



      var setupEventListeners = function() {

            var DOM = UICtrl.getDOMstrings();

            document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
            //callback

            document.addEventListener('keypress', function(event) {
              if (event.keyCode === 13 ||
                  event.which === 13){
                console.log('enter');
                ctrlAddItem();
              }
            })

            document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
      };


      //this is control centre, tells other modules what to do

      //update budget in ui
      var updateBudget = function() {
        // calculate budget
          budgetCtrl.calculateBudget();

        // returns budget
          budget = budgetCtrl.getBudget();

        // display budget in ui
          console.log(budget);
          UICtrl.displayBudget(budget);

      }


      //add new inc / exp item
      var ctrlAddItem = function() {
        var input, newItem;


        // get the field input data
          input = UICtrl.getInput();
          // console.log(input);

          //description should not be empty and value
          // should not be NaN
          if (input.description !== "" && !isNaN(input.value) && input.value > 0){

        //add item to budget controller
          newItem = budgetCtrl.addItem(input.type, input.description, input.value);


        // add new item to UI
          UICtrl.addListItem(newItem, input.type);

        // clear fields
          UICtrl.clearFields();

        //calculate budget
          updateBudget();

        // display budget

        // console.log('it works');
      }
      };

      var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; // .target is exact element event was triggered on

        if (itemID){

          splitID = itemID.split('-');
          type = splitID[0];
          ID = parseInt(splitID[1]);

          //delete item from data structure

          budgetCtrl.deleteItem(type, ID);

          // delete from ui
          UICtrl.deleteListItem(itemID);

          // update new budget
          updateBudget();

        }



      };

      //initialisation within object
      return {
        init: function() {
            console.log("Application has started.");
            UICtrl.displayBudget({
              budget: 0,
              totalInc: 0,
              totalExp: 0,
              percentage: -1
            });
            setupEventListeners();
        }
      };



})(budgetController, uIController);

controller.init();


// events

// event bubbling, when event is triggered on button, etc, it will also trigger on all parent elements, p, div, body, etc

// event delegation is to NOT set up handler on target event, but to set up on parent element
//1.  have element with lots of child elements
//2.  we want event handler on element which is not yet in the DOM when page is loaded








//
