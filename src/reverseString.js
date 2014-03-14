var coderbyte = coderbyte || {};

coderbyte.reverseString = function(string) {
  var stringReversed = "",
      i, 
      len;

  for (i = 0, len = string.length; i < len; i++) {
    stringReversed = string[i] + stringReversed;
  }

  return stringReversed;
}