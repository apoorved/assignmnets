// Compute final price for an item
// Get unit price
// Compute item discount
// Compute tax on item
// Compute final price

// Compute the price for a lineItem.

// Sum the final price of all the lineItems.

const UnitPrices = {
  Carrot: 10,
  Apple: 200,
  Guava:50
};

const Discounts = {
  // values are percentages
  Apple: 10,
};

const Taxes = {
  // values are percentages
  Carrot: 5,
  Guava: 10,
};

const Bills = [
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

const paymentsMade = [
  10000,
  3000,
  7500,
]

/* Programme */
const pendingPayments = [
  // Compute the payments for every bill and add it here.
];

const getDiscountPercent =(productName) => (Discounts[productName] / 100) || 0;

const getTaxPercent = (productName) => (Taxes[productName] / 100) || 0;

const getPrice = (productName) => UnitPrices[productName] || 0;

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
  let itemPriceObj = {
    item:itemName,
    price:lineItemPrice
  }
  return itemPriceObj
}

const calcBill = (eachBill) => {
  let eachBillTotal = [];
  eachBillTotal = eachBill.map(getLineItemPrice)
  eachBillTotal.totalPrice = (eachBillTotal.map(item => item.price)).reduce((a,b) => a + b);
  return(eachBillTotal);
}

const geteachBill = (Bill) => {
  let billObj = Bill.map(calcBill);
  billObj.map((bill) => console.table(bill));
  totalBillsArr = billObj.map(item => item.totalPrice);
  return(totalBillsArr);
}

const main = () =>{
  let billArr =  geteachBill(Bills);
  let Bank = {
    Bills: billArr,
     Payment:paymentsMade
  }
  console.table(Bank);

}

main();

//let pendingPayments = paymentsMade.map((item,index) => billArr[index] - item);