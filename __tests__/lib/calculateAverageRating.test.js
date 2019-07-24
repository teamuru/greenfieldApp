import calculateAverageRate from '../../client/src/lib/calculateAverageRate';

test('calculateAverageRate function', () => {
  let obj = { 2: 1, 3: 1, 4: 2 };
  let ave = calculateAverageRate(obj);
  expect(ave).toBe(3.25);

  obj = { 4.4: 1, 4.5: 1, 4.6: 2 };
  ave = calculateAverageRate(obj);
  expect(ave).toBe(4.5);

  obj = { 4.1: 2, 3.9: 1, 4: 2 };
  ave = calculateAverageRate(obj);
  expect(ave).toBe(4);

  obj = { 2.76: 2, 2.74: 1, 2.77: 2 };
  ave = calculateAverageRate(obj);
  expect(ave).toBe(2.75);
});
