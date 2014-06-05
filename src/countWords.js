// Word Count
// Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces. 

var WordCount = function(str) {
  myArr = str.split(" ");
  return myArr.length;
};

console.log(WordCount("Never eat shredded wheat"));
