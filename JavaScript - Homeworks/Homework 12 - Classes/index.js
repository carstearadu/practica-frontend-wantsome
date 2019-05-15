//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa aiba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu


class Account {
    constructor(location, name) {
      this.location = location;
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
    constructor(){
      this.transactions = [];
    }
    
    addTransaction(...transaction){
      this.transactions.push(...transaction)
    }
  }
  
  const bankAccount = new Account('Iasi', 'Radu')
  const transaction1 = new Transaction('Alex', 'BT', 65, 'first transaction' );
  const transaction2 = new Transaction('Andrei', 'Piraeus', 21, 'second transaction' );
  const table = new Table();
  table.addTransaction(transaction1, transaction2);
  console.log(table)