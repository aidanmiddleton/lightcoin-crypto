class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 500;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }
  commit() {
    this.account.balance += this.value
    console.log('Balance Updated! your new balance is ', this.account.balance)
  }
}

class Deposit extends Transaction {

  get value() {
    console.log('Preparing to deposit ', this.amount);
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    console.log('preparing to withdraw ', this.amount);
    return -this.amount
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("Big Bad John");
console.log('starting balance: ', myAccount.balance);
const t1 = new Deposit(666, myAccount);
t1.commit();
const t2 = new Withdrawal(420, myAccount);
t2.commit();





