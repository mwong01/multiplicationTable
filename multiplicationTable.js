const multiplicationTable = function(maxValue) {
  let result = '\n';
  for (let row = 1; row <= maxValue; row++) {
    for (let col = 1; col <= maxValue; col++) {
      result += row * col + ' ';
    }
    result += '\n';
  }
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));