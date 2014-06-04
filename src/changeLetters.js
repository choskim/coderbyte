//  Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function changeLetters(str) {

  var alphabet = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA";
  var position = 0;
  var newString = "";
  var currentChar = "";

  for (i=0; i<str.length; i++) {
    currentChar=str.charAt(i);
    if (currentChar.search(/[a-zA-Z]/) !== -1) {
      position = alphabet.indexOf(str.charAt(i));
      newString+=alphabet.charAt(position+1);
    } else {
      newString+=currentChar;
    }
  }

  newString=newString.toLowerCase();
  var newerString = "";

  for (i=0; i<newString.length; i++) {
    if (newString[i]=="a" || newString[i]=="e" || newString[i]=="i" || newString[i]=="o" || newString[i]=="u") {
      newerString+=newString[i].toUpperCase();
    } else { newerString+=newString[i]; }
  }
  return newerString;
}
console.log(changeLetters("a confusing /:sentence:/[ this is not!!!!!!!~"));
