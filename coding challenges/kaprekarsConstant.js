/////////   *****INCOMPLETE*****



/* Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. */

function KaprekarsConstant(num) {

  var array = num.toString().split('').map(Number);
  var copy = num.toString().split('').map(Number);
  var copy2 = num.toString().split('').map(Number);
  var ascen = copy.sort();
  var descen = copy2.sort().reverse();



  // var ascenNumber = 0;
  // var descenNumber = 0;

  //
  // for (var i = 0; i < ascen.length; i++) {
  //   console.log(ascen[i]);
  //   ascenNumber = ascenNumber + ascen[i];
  //   descenNumber += descen[i]
  // }

  var ascenNumber = ascen.join('')
  var descenNumber = descen.join('')
  var newTotal = descenNumber - ascenNumber;
  var target = 6174;
  var count = 0;
  console.log(copy);
  console.log(copy2);
  console.log(ascen);
  console.log(descen);
  console.log(ascenNumber);
  console.log(descenNumber);
  console.log(newTotal);



  while (newTotal !== target && count < 10) {
    array = newTotal.toString().split('').map(Number);
    copy = newTotal.toString().split('').map(Number);
    copy2 = newTotal.toString().split('').map(Number);
    ascen = copy.sort();
    descen = copy2.sort().reverse();
    ascenNumber = ascen.join('')
    descenNumber = descen.join('')
    newTotal = descenNumber - ascenNumber;
    // console.log(ascenNumber);
    // console.log(descenNumber);
    // console.log(newTotal);
    count++;
  }

console.log(count);







}


KaprekarsConstant(1211)
