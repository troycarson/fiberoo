function fib(){
  let previous = 1;
  let current = 2;
  let temp;
  let result = [0, 1, 1];
  let num = 0;
  while (num < 97) {
    result.push(current);
    temp = previous;
    previous = current;
    current += temp;
    num++;
  }
  return result;
}

function numsToStrings(input){
  return _.map(input, function(entry) {return entry.toString()});
}

function numEvenNums(input){
  return _.reduce(input, function (memo, num)
  {if(num % 2 == 0) {return memo + 1;} else {return memo;}}, 0);
}

console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));