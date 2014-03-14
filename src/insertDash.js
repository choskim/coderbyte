var coderbyte = coderbyte || {};

// Version 1: A for-loop that has an artificial termination. 
coderbyte.insertDash = function(integer) {
  var integerAsString = integer.toString(),
      integerAsStringWithDashes = "";

  for (i = 0, len = integerAsString.length; i < len; i++) {
  
    if ((window.parseInt(integerAsString[i]) % 2) && (window.parseInt(integerAsString[i + 1]) % 2)) {
      integerAsStringWithDashes += (integerAsString[i] + "-");
    } else {
      integerAsStringWithDashes += integerAsString[i];
    }
  }

  return integerAsStringWithDashes;
};