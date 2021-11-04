const coinChanger = require('./coinChanger');

let test = new coinChanger('1,2,3', 10);
console.log(test.calculate());