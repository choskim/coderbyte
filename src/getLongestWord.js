var coderbyte = coderbyte || {};

// Version 1: A regular expression and a for-loop with an artificial termiantion. 
coderbyte.getLongestWord = function(string) {
  var sanitizedSentence = string.replace(/[^a-z]+/gi, " "),
      words             = sanitizedSentence.split(" "),
      longestWord       = "",
      i,
      len;

  for (i = 0, len = words.length; i < len; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
};