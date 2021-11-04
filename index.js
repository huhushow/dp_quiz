const coinChanger = require('./coinChanger');

let test = new coinChanger([1, 2, 5, 10, 20, 50, 100, 200], 500);
console.log(test.calculate());