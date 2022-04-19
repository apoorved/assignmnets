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
function processTransaction(eachTransaction){
  let type = eachTransaction['type'];
  let amount = eachTransaction['amount'];
  let accountNo = eachTransaction['accountNo'];
  let balance = balances[accountNo];
  if(type === 'withdrawal'){
    balances[accountNo] = balance - amount;
  }
  else{
    balances[accountNo] = balance + amount;
  }
  

}
var updateBalancesWithTransactions = function() {
	// Implement transaction code here.
    transactions.map(processTransaction);

};
function accountsBalance(account) {
  let name = account['name'];
  let accountNo = account['accountNo'];
  let balance = balances[accountNo];

  console.log(accountNo, name, balance);
}

var displayBalances = function() {
	// Implement display code here.
    accounts.map(accountsBalance);

};


// Do not change below this line.
var main = function() {
	console.log('Balances before transactions');
	displayBalances();
	updateBalancesWithTransactions();
	console.log('Balances after transactions');
	displayBalances();
}

main();
