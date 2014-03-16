var coderbyte = coderbyte || {};

// Version 1: A while-loop that has a natural termination. 
coderbyte.calculateFactorial = function (integer) {
  var product = 1;

  while (integer) {
    product = product * integer; 
    
    integer--;
  }

  return product;
}
