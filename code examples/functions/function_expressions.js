//function statements and exressions


//function declaration
//function whatDoYouDo(job, firstName){}

//function expression
var whatDoYouDo = function(job, firstName){
  switch(job){
    case 'teacher':
        return `${firstName} teaches kids`;
    case 'driver':
        return `${firstName} drives`;
    case 'desginer':
        `${firstName} likes art`;
    default:
        return `${firstName} does something else`;
  }
}
console.log(whatDoYouDo("driver", "Theo"));
