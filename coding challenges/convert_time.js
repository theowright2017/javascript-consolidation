function TimeConvert(num) {

   var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ":" + minutes;
}


TimeConvert(330);
//5:35
