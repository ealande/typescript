class Account {
    accountNumber: number;
    balance: number = 0;
    value: number = 0;

    constructor (accountNumber: number){
        this.accountNumber = accountNumber
    }
}

class SalaryAccount extends Account {
    deposit(value: number) {
        this.balance += value;
    }
}

interface Example2 {
    cnpj: number;
}

interface Example3 {
    telephone: number;
}


interface ITransactions {
    transfer: (value: number, destinatary: Account) => boolean;
    transferTax: number;
}

class CurrentAccount extends Account implements ITransactions {
    transfer(value: number, destinatary: Account){
        destinatary.value += value - this.transferTax;
        return true;
    };
    transferTax: number = 0;
}

