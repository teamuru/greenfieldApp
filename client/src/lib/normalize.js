/* eslint no-param-reassign: "off" */
/* eslint array-callback-return: "off" */

// const sample = {
//   product_id: '2',
//   ratings: {
//     2: 1,
//     3: 1,
//     4: 2,
//     5: 1
//   },
//   recommended: {
//     0: 5
//   },
//   characteristics: {
//     Quality: '4.2000'
//   }
// };

const normalizeData = (obj) => {
  const arr = Object.values(obj);

  const ratings = [1, 2, 3, 4, 5];

  // ratings.map((element) => {
  //   if (!obj[element]) {
  //     temp[element] = 0;
  //   } else {
  //     temp[element] = obj[element];
  //   }
  // });

  ratings.map((element) => {
    if (!obj[element]) {
      obj[element] = 0;
    }
  });

  const max = arr.reduce((a, b) => (a > b ? a : b));
  return max / 100;
  // return temp;
};

// const actual = normalizeData(sample.ratings);

// console.log(actual);

export default normalizeData;
