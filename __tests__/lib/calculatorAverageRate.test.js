import calculatorAverageRate from '../../client/src/lib/calculatorAverageRate';

test('calculatorAverageRate function', ()=>{
    var obj = {2: 1, 3: 1, 4: 2}
    var ave = calculatorAverageRate(obj)
    expect(ave).toBe(2.25)
})

test('calculatorAverageRate function', ()=>{
    var obj = {4.4: 1, 4.5: 1, 4.6: 2}
    var ave = calculatorAverageRate(obj)
    expect(ave).toBe(4.5)
})

test('calculatorAverageRate function', ()=>{
    var obj = {4.1: 2, 3.9: 1, 4: 2}
    var ave = calculatorAverageRate(obj)
    expect(ave).toBe(4)
})

test('calculatorAverageRate function', ()=>{
    var obj = {2.76: 2, 2.74: 1, 2.77: 2}
    var ave = calculatorAverageRate(obj)
    expect(ave).toBe(2.75)
})