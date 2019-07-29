function LetterCapitalize(str) {


    str = str.toLowerCase()
    .split(' ')
    //split string into new array by spaces, meaning new array is now ['hello', 'world']
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    //map previous array into new array called s, and for each element, get character at (0), change to uppercase, and also include everything after it from character 1
    .join(' ');
    //join back into string separated by spaces
  // code goes here

  console.log(str);

}
LetterCapitalize("hello world");

//
