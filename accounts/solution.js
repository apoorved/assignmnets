// Write a programme to impact the balances of the given accounts, based on their transactions.
// Print the final balance for all the accounts with account number, name and balance amount.

/* Input */
const accounts = [
  {
    'name': 'Arun',
    'accountNo': '001',
  },
  {
    'name': 'Babu',
    'accountNo': '002',
  },
  {
    'name': 'Chandra',
    'accountNo': '003',
  },
];

const balances = {
  // accountNo: balance
  '001': 5000,
  '002': 2000,
  '003': 0,
};

const transactions = [
  {
    'accountNo': '001',
    'type': 'withdrawal',
    'amount': 1000,
  },
  {
    'accountNo': '001',
    'type': 'deposit',
    'amount': 500,
  },
  {
    'accountNo': '001',
    'type': 'withdrawal',
    'amount': 1000,
  },
  {
    'accountNo': '002',
    'type': 'deposit',
    'amount': 300,
  },
  {
    'accountNo': '002',
    'type': 'withdrawal',
    'amount': 200,
  },
  {
    'accountNo': '003',
    'type': 'deposit',
    'amount': 200,
  },
];

/* Process */
var processTransaction = function (transaction) {
  var type = transaction['type'];
  var amount = transaction['amount'];
  var accountNo = transaction['accountNo'];
  var balance = balances[accountNo];

  if (type === 'withdrawal') {
    balances[accountNo] = balance - amount;
  } else {
    balances[accountNo] = balance + amount;
  }
};

var updateBalancesWithTransactions = function () {
  // Implement transaction code here.
  for (var i = 0; i < transactions.length; i++) {
    var transaction = transactions[i];
    processTransaction(transaction);
  }
};

var displayAccountBalance = function (account) {
  var name = account['name'];
  var accountNo = account['accountNo'];
  var balance = balances[accountNo];

  console.log(accountNo, name, balance);
};

var displayBalances = function () {
  // Implement display code here.
  for (var i = 0; i < accounts.length; i++) {
    var account = accounts[i];
    displayAccountBalance(account);
  }
};

// Do not change below this line.
/* Main Function */
var main = function () {
  console.log('Balances before transactions');
  displayBalances();

  updateBalancesWithTransactions();

  console.log('Balances after transactions');
  displayBalances();
};

main();
