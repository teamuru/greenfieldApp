// const sample = {
//   product_id: '1',
//   ratings: {
//     '4': 1,
//     '5': 2
//   },
//   recommended: {
//     '0': 2,
//     '1': 1
//   },
//   characteristics: {
//     Comfort: '5.0000',
//     Fit: '4.0000',
//     Length: '3.5000',
//     Quality: '4.0000'
//   }
// };

const normalizeData = (obj) => {
  const arr = Object.values(obj);
  const max = arr.reduce((a, b) => {
    return a > b ? a : b;
  });
  return max;
};

// const actual = normalizeData(sample.ratings);

// console.log(actual);

export default normalizeData;
