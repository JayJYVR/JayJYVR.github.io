const nums = [ 1,2,3,4,5,6,7,8,9,10 ];

var even_nums = nums.every(myFunction);

function myFunction(value, index, array) {
  return value % 2 == 0;
}