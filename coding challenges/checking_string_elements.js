// if letter in string has '+' either side of it, return true, if not return false
//'+f+===+d+33'
//true
//'k+===+l+'
//false


function SimpleSymbols(str) {


    strArray = str.split('');
    result = false;
    for ( var i = 0; i< strArray.length; i++){
        if(str[0].match(/[a-z]/i)) {
            result = false;
        } else if (str[i].match(/[a-z]/i)){
              if( str[i - 1] && str[i + 1] === "+"){
                result = true;
        }
        }
    }
  // code goes here
  return result;

}


///// other solutions

//favourite
function SimpleSymbols(str) {

  // code goes here
  if (str.match(/[^+][A-Za-z][^+]/g)) return false;
  else if (str.match(/[+][A-Za-z][^+]/g)) return false;
  else if (str.match(/[^+][A-Za-z][+]/g)) return false;
  return true;
}


/////



function SimpleSymbols(str) {

    if (str === '') {
        return 'false';
    }

    let result = str.split('').every(letterEval);

    return result ? 'true' : 'false';

    function letterEval(letter, index) {
        let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (letters.includes(letter)) {
            // Check for first or last character
            if (index === 0 || index === str.length - 1) {
                // Letter is first or last char, fail case
                return false;
            }

            if (str[index - 1] === '+' && str[index + 1] === '+') {
                return true;
            }
        } else {
            // Ignore non letters
            return true;
        }
    }

}




/////


function SimpleSymbols(str) {

  if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
      return false;
  }
  else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
      return false;
  }
  else {
   return true;
  }




}













//
