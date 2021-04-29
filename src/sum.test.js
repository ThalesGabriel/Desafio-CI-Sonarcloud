const sum = require('./sum');
const times = require('./times');

test("It should add 1 + 2 to be equal 3", () => {
    expect(sum(1,2)).toBe(3)
})

test("It should add 3 * 60 to be equal 180", () => {
    expect(times(3,60)).toBe(180)
})

test("It should add 3.6 * 11 sum with 20 to be equal to floor of 59.6 which is 59", () => {
    expect(parseInt(sum(times(3.6,11), 20))).toBe(59)
})
