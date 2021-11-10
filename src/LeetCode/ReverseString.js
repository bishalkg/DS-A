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