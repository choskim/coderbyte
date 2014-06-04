// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

function SimpleSymbols(str) {
  var currentChar=0;
  var currentCharPrev=0;
  var currentCharNext=0;
  var acceptability = true;

  for (i=0; i<str.length; i++) {
    currentChar = str.charAt(i);
    currentCharPrev = str.charAt(i-1);
    currentCharNext = str.charAt(i+1);
    
    if (currentChar.search(/[a-zA-Z]/) !== -1) {
      if (i !== 0) {
        if (i != str.length-1) {
          if ((currentCharPrev.search(/\+/) !== -1) && (currentCharNext.search(/\+/) !== -1)) {
          } else { acceptability=false; }
        } else { acceptability=false; }
      }  else  { acceptability=false; }
    return acceptability;
    }
  }
}