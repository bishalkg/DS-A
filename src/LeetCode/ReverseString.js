var reverseString = function(string) {
  var rev = '';
  for (var i = string.length - 1; i >= 0; i--) {
    rev+=string[i]
  }
  return rev;
}


//recursive
var recursiveRevString = function(string) {
  if (string === '') {
    return '';
  } else {
    return recursiveRevString(string.substr(1)) + string.charAt(0);
  }

}

console.log(reverseString('this is a string'))
console.log(recursiveRevString('this is a string'));


//in-place reverse with an array string
var reverse = function(array) {
  for (var i = 0; i < Math.floor(array.length/2); i++) {
    [array[i], array[array.length - 1 -i]] = [array[array.length-1-i], array[i]]
  }
  return array;
}

//this is a basic two pointer problem, swap the first and last elements length/2 number of times