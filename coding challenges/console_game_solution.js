
//use iife to make sure that other code doesn't override, if same variables etc
(function(){



function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}


//inherited method from Question object
Question.prototype.displayQuestion =
function(){
  console.log(this.question);

  for ( var i = 0; i < this.answers.length; i++){
    console.log(i + '. ' + this.answers[i]);
  }
}





Question.prototype.checkAnswer =
function(ans, callback) {
  var sc;

  if (ans === this.correct) {
    console.log("Correct Answer!!");
    sc = callback(true);

  } else {
    console.log("Wrong Answer, Try Again!");

    sc = callback(false);
  }

  this.displayScore(sc);
}





Question.prototype.displayScore =
function(score) {
  console.log('Your current score is: ' + score);
  console.log('-----------------');
}






var q1 = new Question('what is my name?',
                      ["tom", "theo", "john"],
                      1);

var q2 = new Question(
                "how old am i?",
                [32, 28, 35],
                0);

var q3 = new Question(
                "where do i live?",
                ['edinburgh', 'glasgow'],
                0);



var questions = [q1, q2, q3];






function score() {
    var sc = 0;
    return function(correct) {
        if (correct) {
          sc++;
        }
        return sc;
    }
}




var keepScore = score();




function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');



    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      //this is calling checkAnswer, keepScore is replacing callback^^^

      nextQuestion();
  // }


    }
}
nextQuestion();

})();











//
