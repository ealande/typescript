"use strict";
class Account {
    constructor(accountNumber) {
        this.balance = 0;
        this.value = 0;
        this.accountNumber = accountNumber;
    }
}
class SalaryAccount extends Account {
    deposit(value) {
        this.balance += value;
    }
}
class CurrentAccount extends Account {
    constructor() {
        super(...arguments);
        this.transferTax = 0;
    }
    transfer(value, destinatary) {
        destinatary.value += value - this.transferTax;
        return true;
    }
    ;
}
