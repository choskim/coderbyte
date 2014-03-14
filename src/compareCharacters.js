var coderbyte = coderbyte || {};

// Version 1: A for-loop that has an artificial termination. 
coderbyte.compareCharacters = function(string) {
  var obj = {},
      i, 
      len,
      equalNumberOfCharacters,
      key;

  if (string.length % 2) {
    return false;
  }

  for (i = 0, len = string.length; i < len; i++) {
  	if (obj[string[i]] === undefined) {
  	  obj[string[i]] = 0;
  	} 

  	obj[string[i]]++;
  }

  equalNumberOfCharacters = string.length / Object.keys(obj).length;

  for (key in obj) {
    if (obj[key] !== equalNumberOfCharacters) {
      return false;
    }
  }

  return true;
}