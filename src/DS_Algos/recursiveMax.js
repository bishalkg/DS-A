
function max(array) {
  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  }
  var sub_max = max(array.slice(1));
  return array[0] > sub_max ? array[0] : sub_max;
}


function altmax(array, max = 0) {
  return array.length === 0 ? 0 : altmax(array.slice(1), array[0] > max ? array[0] : max)
}