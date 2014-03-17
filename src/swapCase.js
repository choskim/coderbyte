var coderbyte = coderbyte || {};

// Version 1: A for-loop that has an artificial termination. 
coderbyte.swapCase = function(string) {
  var swapCasedString = "",
      i, 
      len; 

  for (i = 0, len = string.length; i < len; i++) {
    if (string[i] === string[i].toUpperCase()) {
      swapCasedString += string[i].toLowerCase();
    } else {
      swapCasedString += string[i].toUpperCase();
    }
  }

  return swapCasedString;
};