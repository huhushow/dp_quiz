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
