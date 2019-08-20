function repeatedString(s, n) {
  let count = (s.match(/a/g) || []).length * Math.floor(n/s.length)
  let remainder = n % s.length
  let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length

  console.log(count )
  console.log(10%4);
  console.log(remainderCount);
  return count + remainderCount
}


repeatedString("aaaa", 10);
repeatedString("abba", 10);

//
//
// function repeatedString(s, n) {
//   // 1. count = length of matches containing a, multiplied by (total lenth required / initial string length)
//   // if s = "aaaa" , n = 10
//   // count = 8
//   let count = (s.match(/a/g) || []).length * Math.floor(n/s.length)
//   //remainder = remainder of 10 / 4 = 2
//   let remainder = n % s.length
//   //remainderCount = string of s for length of remainder, then length of how many matches contain a
//   // remainderCount= 2
//   let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length
//
//   console.log(count + remainderCount);
//   return count + remainderCount
// }
