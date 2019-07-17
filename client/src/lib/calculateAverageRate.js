// this function will take a object with k = rate; value = number on each rate
// obj = { 2: 1, 3: 1, 4: 2, ... }
// return average rate rounding to nearest 0.25

function calculateAverageRate(obj) {
  let rateSum = 0;
  let rateCounter = 0;
  Object.keys(obj).forEach((k) => {
    rateSum += Number(k) * obj[k];
    rateCounter += obj[k];
  });

  const average = rateSum / rateCounter;
  return Number(Math.round(average * 4) / 4);
}

export default calculateAverageRate;

// test
// var obj = {2: 1, 3: 1, 4: 2}
// var output = calculatorAverageRate(obj)
// console.log(output)
