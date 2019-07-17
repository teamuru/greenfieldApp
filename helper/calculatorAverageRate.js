//this function will take a object with k = rate; value = number on each rate
// obj = { 2: 1, 3: 1, 4: 2, ... }
// return average rate rounding to nearest 0.25

function calculatorAverageRate(obj) {
  var rateSum = 0;
  var rateCounter = 0;
  for (var k in obj) {
    rateSum += Number(k);
    rateCounter += obj[k];
  }
  var average =rateSum / rateCounter;
  return (Math.round(average*4)/4).toFixed(2);
}

// test
// var obj = {2: 1, 3: 1, 4: 2}
// var output = calculatorAverageRate(obj)
// console.log(output)