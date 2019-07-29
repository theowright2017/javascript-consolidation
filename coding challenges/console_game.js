// 1  build a function constructor called Question to describe a question.  A question should include:
//a)  question itself
//b)  the answers from which the player can choose the correct one ( choose correct data structure, array, object, etc)
//c)  correct answer ( use number)



function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

var question1 = new Question(
                "what is my name?",
               ["tom", "theo", "john"],
                1);

var question2 = new Question(
                "how old am i?",
                [32, 28, 35],
                0);

var question3 = new Question(
                "where do i live?",
                ['edinburgh', 'glasgow'],
                0);

var questions = [question1, question2, question3];

var rand = null;

// function randomQuestion(questionArr) {
//      rand = questionArr[Math.floor(Math.random() * questionArr.length)];
//     console.log(rand.question);
//
//     for (var i = 0; i < rand.answers.length; i++){
//     console.log(`${i}. ${rand.answers[i]}`);
//   }
// }

(function () {
  rand = questions[Math.floor(Math.random() * questions.length)];
 console.log(rand.question);

 for (var i = 0; i < rand.answers.length; i++){
 console.log(`${i}. ${rand.answers[i]}`);
}
})();

var result = null;

// function getAnswer() {
//   result = window.prompt("Please choose your answer")
//   // console.log(result);
//   // console.log(rand.correct);
// }

(function () {
  result = window.prompt("Please choose your answer")
})();

// function checkAnswer(value){
//   if (value == rand.correct){
//     console.log("That is the correct answer!!");
//   } else {
//     console.log("Sorry, that's incorrect");
//   }
// }

(function () {
  if (result == rand.correct){
    console.log("That is the correct answer!!");
  } else {
    console.log("Sorry, that's incorrect");
  }
})();

// console.log(result);

// randomQuestion(questions)
// promptAnswer()
// getAnswer()
// checkAnswer(result)
// console.log(result);
// console.log(rand.correct);
// console.log(questions);















//
