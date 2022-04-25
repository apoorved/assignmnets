// Compute final price for an item
// Get unit price
// Compute item discount
// Compute tax on item
// Compute final price

// Compute the price for a lineItem.

// Sum the final price of all the lineItems.

var UnitPrices = {
  Carrot: 10,
  Apple: 200,
};

var Discounts = {
  // values are percentages
  Apple: 10,
};

var Taxes = {
  // values are percentages
  Carrot: 5,
  Guava: 10,
};

var Bills = [
  [
    {
      item: 'Carrot',
      units: 200,
    },
    {
      item: 'Apple',
      units: 150,
    },
    {
      item: 'Guava',
      units: 40,
    },
  ],
  [
    {
      item: 'Carrot',
      units: 20,
    },
  ],
  [
    {
      item: 'Apple',
      units: 30,
    },
    {
      item: 'Guava',
      units: 80,
    },
  ]
];

var paymentsMade = [
  10000,
  3000,
  7500,
]

/* Programme */
var pendingPayments = [
  // Compute the payments for every bill and add it here.
];

const getDiscountPercent =(productName) => {
  let discount = Discounts[productName];
  return(discount?(discount / 100):0);
}

const getTaxPercent = (productName) => {
  let tax = Taxes[productName];
  return(tax?(tax / 100):0)
}
const getPrice = (productName) => {
  let price = UnitPrices[productName];
  return(price?price:0);
}

const getUnitPrice = (itemName) => {
  let rate = getPrice(itemName);
  let discountPercent = getDiscountPercent(itemName);
  let itemDiscount = rate * discountPercent;
  let discountedPrice = rate - itemDiscount;
  let taxPercent = getTaxPercent(itemName);
  let tax = discountedPrice * taxPercent;
  let eachUnitPrice = discountedPrice + tax;

  return eachUnitPrice;
};
const getLineItemPrice = (lineItem) =>{
  let itemName = lineItem['item'];
  let units = lineItem['units'];
  let unitPrice = getUnitPrice(itemName);
  let lineItemPrice = unitPrice * units;

  return lineItemPrice;
}

const calcBill = (eachBill) => {
  let eachBillTotal = [];
  eachBillTotal = (eachBill.map(getLineItemPrice)).reduce((a,b) => a+b);
  return eachBillTotal;
}

const geteachBill = (Bill) => {
  let bill = Bill.map(calcBill);
  return bill
}

const main = () =>{
  let billArr =  geteachBill(Bills);
  let pendingPayments = paymentsMade.map((item,index) => billArr[index] - item);
  let Bank = {
    Bills: billArr,
    Payment:paymentsMade,
    Pending:pendingPayments
  }
  console.table(Bank);
}

main();