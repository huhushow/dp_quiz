const coinChanger = require('./coinChanger');

describe("args validation", () => {
  test('only allow array for coinType', () => {
    expect(() => new coinChanger({coin1:1,coin2:2,coin5:5}, 100)).toThrow(TypeError);
  });
  test('only allow array for coinType 2', () => {
    expect(() => new coinChanger('1,2,5,10', 100)).toThrow(TypeError);
  });
  test('only allow array for coinType 3', () => {
    expect(() => new coinChanger(1, 100)).toThrow(TypeError);
  });
  test('each coin type should be integer', () => {
    expect(() => new coinChanger(['1', '2'], 100)).toThrow(TypeError);
  });
  test('bill amount should be integer', () => {
    expect(() => new coinChanger([1, 2, 5], '10')).toThrow(TypeError);
  });
});

describe("run numbers", () => {
  const type = [1,2,5];
  const amounts = {
    1: 1,
    2: 2,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7,
    9: 8,
    10: 10
  };
  for (let i in amounts) {
    let c = new coinChanger(type, parseInt(i));
    test(`bill amount ${i}`, () => {
      expect(c.calculate()).toBe(amounts[i]);
    });
  }
});
