// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. 

function addUpTo(num){
  var total=0;
  var i=1;
  total=num;

  while (i<=num) {
    total+=i;
    i++;
  }
  
  return total;
}

console.log(addUpTo(100));