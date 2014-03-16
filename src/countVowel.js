var coderbyte = coderbyte || {};

// Version 1: A for-loop that has an artificial termination. 
coderbyte.countVowel = function(string) {
  var obj            = {},
      stringOfVowels = 'aeiou',
      count          = 0,
      i,
      j,
      len;

  for (i = 0, len = stringOfVowels.length; i < len; i++) {
    obj[stringOfVowels[i]] = true;
  }	

  for (j = 0, len = string.length; j < len; j++) {
    if (obj[string[j]]) {
      count++;
    }
  }

  return count;
}