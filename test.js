const metaRec = {
  '0': 1,
  '1': 4
};

const calcRec = (obj) => {
  const values = Object.values(obj).reduce((a, b) => {
    return a + b;
  });

  return (obj['1'] / values) * 100;
};

let actual = calcRec(metaRec);
console.log('actual: ', actual);
