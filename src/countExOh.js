// Ex Oh
// Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 
var ExOh = function(str) {
  var o = 0;
  var x = 0;

  for (i=0;i<str.length;i++) {
    if (str.toLowerCase().charAt(i) === "o") {
      o+=1;
    } else if (str.toLowerCase().charAt(i) === "x") {
      x+=1;
    }
  }

  if (x === o) {
    return "true";
  } else {
    return "false";
  }
};
console.log(ExOh("xooxxxooxo"));
