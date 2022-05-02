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
const rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

const discounts = {
  // values are in percentages.
  Apple: 10,
};

const taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
};

const purchases = [
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

const getDiscountPercent = (productName) => {
  let discount = discounts[productName];
  return(discount?(discount / 100):0);
};

const getTaxPercent = (productName) => {
  let tax = taxes[productName];
  return(tax?(tax/100):0); 
}

const getUnitPrice = (itemName) => {
  let unitPrice = rates[itemName];
  let discountPercent = getDiscountPercent(itemName);
  let itemDiscount = unitPrice * discountPercent;
  let discountedPrice = unitPrice - itemDiscount;
  let taxPercent = getTaxPercent(itemName);
  let tax = discountedPrice * taxPercent;
  let eachUnitPrice = discountedPrice + tax;

  return eachUnitPrice;
};

const  getLineItemPrice =(lineItem)=> {
  let itemName = lineItem['item'];
  let units = lineItem['units'];
  let unitPrice = getUnitPrice(itemName);
  let lineItemPrice = unitPrice * units;
  let itemPriceObj = {
    item:itemName,
    price:lineItemPrice
  }
  return itemPriceObj
};
const main = () =>{
  let bill = (purchases.map(getLineItemPrice))
  console.table(bill);
  total = (bill.map(item => item.price)).reduce((a,b) => a + b);
  console.log("Total-------------------" +total); 
}
main();
