// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

var titleToNumer = function(columnTitle) {
  var sum = 0;
  for (var i = 0; i < columnTitle.length; i++) {
    sum+= (columnTitle[i].charCodeAt(0) - 64) * Math.pow(26, columnTitle.length - i - 1);
  }
  return sum;
}

//Excel columns work like this -->
// (CharCodeAt Letter - 64)* 26^n-1 + (CharCodeAt Letter - 64)* 26^n-1 ...
// BCA
// B*26^2 + C*26^1 + C*26^0