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

// Version 2: A regular expression. 
// coderbyte.insertDash = function(integer) {
//   var integerAsString           = integer.toString(), 
//       regex                     = /([13579])(?=[13579])/g,
//       integerAsStringWithDashes = "";

//   integerAsStringWithDashes = integerAsString.replace(regex, "$1-");

//   return integerAsStringWithDashes; 
// };