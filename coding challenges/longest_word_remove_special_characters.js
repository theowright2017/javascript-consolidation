/* Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
-input "fun&!! time"

- output "time"
input "12345 54321"
output "12345" */


function LongestWord(sen) {

  // code goes here

  var array = sen.split(/[^A-Za-z1-9]+/)
  var highestLength = 0;
  var answer = "";
  // console.log(array)

    for (var i=0;i<array.length;i++){
      if (highestLength < array[i].length){
        highestLength = array[i].length;
        answer = `${array[i]}`
        // console.log(array[i] + " from " + highestLength)
      }
    }
    // console.log(answer);

  return answer;

}
