// import calculateAverageRate from './client/lib'

let res = {
  product_id: '3',
  ratings: {
    '3': 1,
    '4': 3,
    '5': 1
  },
  recommended: {
    '0': 1,
    '1': 4
  },
  characteristics: {
    Comfort: null,
    Fit: null,
    Length: null,
    Quality: null
  }
};

let actual = calculateAverageRate(res.ratings);

console.log('actual', actual);
