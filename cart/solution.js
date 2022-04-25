// ---------------------------

// Problem 1 - Print the total price for the following items.
// ---------------------------

// Break-up
// Compute final price for an item
  // Get unit price
  // Compute item discount
  // Compute tax on item
  // Compute final price

// Compute the price for a lineItem. Note: Every purchase will have a lineItem in the bill.

// Sum the final price of all the lineItems.

/* Data */
var rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

var discounts = {
  // values are in percentages.
  Apple: 10,
};

var taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
};

var purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  },
];

/* Functions */
var getDiscountPercent = function (productName) {
  var discount = discounts[productName];

  if (discount) {
    return discount / 100;
  } else {
    return 0;
  }
};

var getTaxPercent = function (productName) {
  var tax = taxes[productName];

  if (tax) {
    return tax / 100;
  }
  else {
    return 0;
  }
};

var getUnitPrice = function (itemName) {
  var unitPrice = rates[itemName];
  var discountPercent = getDiscountPercent(itemName);
  var itemDiscount = unitPrice * discountPercent;
  var discountedPrice = unitPrice - itemDiscount;
  var taxPercent = getTaxPercent(itemName);
  var tax = discountedPrice * taxPercent;
  var unitPrice = discountedPrice + tax;

  return unitPrice;
};

var getLineItemPrice = function (lineItem) {
  var itemName = lineItem['item'];
  var units = lineItem['units'];
  var unitPrice = getUnitPrice(itemName);
  var lineItemPrice = unitPrice * units;

  return lineItemPrice;
};

var getSum = function () {
  var i = 0;
  var sum = 0;

  while (i < purchases.length) {
    var lineItem = purchases[i];
    lineItemPrice = getLineItemPrice(lineItem);
    sum = sum + lineItemPrice;
    i = i + 1;
  }

  return sum;
};

// Do not change below this line.
/* Main Function */
var main = function main() {
  console.log(getSum());
}

main();
