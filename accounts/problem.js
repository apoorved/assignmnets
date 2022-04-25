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
const processTransaction = (eachTransaction)=> {
  let type = eachTransaction['type'];
  let amount = eachTransaction['amount'];
  let accountNo = eachTransaction['accountNo'];
  let balance = balances[accountNo];
  balances[accountNo] = (type === "withdrawal")? balance - amount : balance + amount;
}
const updateBalancesWithTransactions = () => {
	// Implement transaction code here.
    transactions.map(processTransaction);
};
const accountsBalance = (account) => {
  let accountNumber = account['accountNo'];
  let bank = {
  name:account['name'],
  accountNo:account['accountNo'],
  balance:balances[accountNumber]
};
return bank;

}

const displayBalances = () => {
	// Implement display code here.
    let bankBalance = accounts.map(accountsBalance);
    console.table(bankBalance);
};
      

// Do not change below this line.
const main = () => {
	console.log('Balances before transactions');
	displayBalances();
	updateBalancesWithTransactions();
	console.log('Balances after transactions');
	displayBalances();
}

main();
