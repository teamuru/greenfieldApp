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
  const max = arr.reduce((a, b) => (a > b ? a : b));
  return max / 100;
};

// const actual = normalizeData(sample.ratings);

// console.log(actual);

export default normalizeData;
