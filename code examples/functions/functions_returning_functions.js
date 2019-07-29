//functions returning functions

function interviewQuestion(job) {
  if ( job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain UX?');
    }
  } else if (job === 'teacher') {
      return function(name) {
        console.log('What subject do you teach, ' + name + '?');
      }
  } else {
      return function(name) {
        console.log('Hello ' + name + ', what do you do?');
      }
  }

}


var teacherQuestion = interviewQuestion('teacher');
teacherQuestion("john");

var designerQuestion = interviewQuestion('designer');
designerQuestion('tim');


// doesn't need to be stored to a variable, can be called straight away
interviewQuestion('teacher')('Mark');




















//
