// Traveling Shopper
// Given an amount of money you have, and an array of items you want to buy, determine how many of them you can afford.

// The given amount will be in the format ["Amount", "Currency Code"]. For example: ["150.00", "USD"] or ["6000", "JPY"].
// Each array item you want to purchase will be in the same format.
// Use the following exchange rates to convert values:

// Currency	1 Unit Equals
// USD	1.00 USD
// EUR	1.10 USD
// GBP	1.25 USD
// JPY	0.0070 USD
// CAD	0.75 USD
// If you can afford all the items in the list, return "Buy them all!".
// Otherwise, return "Buy the first X items.", where X is the number of items you can afford when purchased in the order given.

function buyItems(funds, items) {
  console.log(funds, items);

  const convTable = {
    USD: 1,
    EUR: 1.1,
    GBP: 1.25,
    JPY: 0.007,
    CAD: 0.75,
  };

  // build a converter helper
  function converter(value, curr) {
    if (curr !== 'USD') {
      let convRate = convTable[curr].value;
      // convert value
      console.log(convRate);
      return value * convRate;
    }
    return value;
  }

  converter(100, 'USD');

  return funds;
}
