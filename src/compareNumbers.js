// Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1. 
var coderbyte = coderbyte || {};

coderbyte.checkNums = function(num1, num2) {
  if (num1 < num2) {
    answer = true;
  } else {
    answer = false;
  }

  if (num1==num2) {
    answer = "-1";
  }

  return answer;
};
