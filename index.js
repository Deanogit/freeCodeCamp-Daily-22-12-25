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
    return Number(value) * convTable[curr];
  }

  // convert funds
  let convertedFunds = converter(funds[0], funds[1]);
  console.log(convertedFunds);

  // convert shopping list
  const convertedList = [];

  for (let i = 0; i < items.length; i++) {
    convertedList.push(converter(items[i][0], items[i][1]));
  }

  console.log(convertedList);

  // check funds
  let balance = Number(convertedFunds);
  let count = 0;

  for (let i = 0; i < convertedList.length; i++) {
    let itemPrice = Number(convertedList[i]);

    if (balance >= itemPrice) {
      balance -= itemPrice;
      count++;
    } else {
      // If we can't afford this one, we stop shopping!
      break;
    }
  }

  // return statement
  if (count === items.length) {
    return 'Buy them all!';
  } else {
    return `Buy the first ${count} items.`;
  }

  // console.log(converter(100, "JPY"))

  return funds;
}
