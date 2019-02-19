// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency <= 0) {
    return {};
  } else if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  } else {
    const coins = {"H":50,"Q":25,"D":10,"N":5,"P":1};
    const change = {};
    for (const key in coins) {
      const value = coins[key];
      if (currency >= value){
        change[key] = Math.floor(currency / value);
        currency = currency % value;
      }
    }
    return change;
  }

    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
