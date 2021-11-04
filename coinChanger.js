class coinChanger {
  constructor(coinType, billAmount) {
    this.coinType = coinType;
    if (!Number.isInteger(billAmount)) {
      throw new TypeError('Bill Amount should be Integer');
    }
    this.billAmount = billAmount;
  }
  get coinType() {
    return this._coinType;
  }
  set coinType(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Coin type should be Array');
    }
    for (let v of value) {
      if (!Number.isInteger(v)) {
        throw new TypeError('Coin type value should be Integer');
      }
    }
    value.sort((a, b) => a - b);
    this._coinType = value;
  }

  calculate() {
    const dp = Array(this.billAmount + 1);
    dp.fill(0);
    dp[0] = 1;
    for (const i of this.coinType) {
      for (let j = i; j <= this.billAmount; j++) {
        if (j - i >= 0) {
          // console.log(i + ' : ' + j + ' = ' + dp[j] + ' : ' + dp[j - i]);
          dp[j] += dp[j - i];

        }
      }
    }
    return dp[this.billAmount];
  }
}

module.exports = coinChanger;