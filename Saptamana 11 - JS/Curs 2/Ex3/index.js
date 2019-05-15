class Account {
    constructor(location, name){
        this.location=location;
        this.name = name;
    }
}

class Transaction {
    constructor(sender, bank, amount, reference){
        this.sender = sender;
        this.bank = bank;
        this.amount = amount;
        this.reference = reference;
    }
    finalSum() {
        return this.amount - 10;
    }
}

class Table {
    constructor() {
        this.transactions = [];
    }
    addTransaction(...transaction) {
        this.transactions.push(...transaction)
    }
}

const bankAccount = new Account('Iasi', 'Radu');
const transaction1 = new Transaction('Radu', 'BT', '5', 'beer money');
const transaction2 = new Transaction('Lucian', 'Revolut', '10', 'women');
const table = new Table();
table.addTransaction(transaction1, transaction2);
console.log(table)