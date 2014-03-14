var coderbyte = coderbyte || {};

coderbyte.reverseString = function(string) {
  var stringReversed = "",
      i, 
      len;

  for (i = 0, len = string.length; i < len; i++) {
    stringReversed = string[i] + stringReversed;
  }

  return stringReversed;
};

// Version 2: A for-loop that has a natural termination. 
// coderbyte.reverseString = function(string) {
//   var stringReversed = "",
//       i, 
//       len;

//   for (len = string.length; len; len--) {
//     i = len -1;    
//     stringReversed += string[i];
//   }

//   return stringReversed;
// };