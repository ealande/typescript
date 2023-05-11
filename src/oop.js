"use strict";
class person {
    constructor(name, income) {
        this.name = name;
        this.income = income;
    }
    sayHello() {
        return `${this.name} said hello`;
    }
}
class bankAccount {
    constructor(accountNumber) {
        this.balance = 9;
        this.accountNumber = accountNumber;
    }
    static returnNumberOfTheBank() {
        return 125;
    }
    getBalance() {
        return this.balance;
    }
    deposit(value) {
        this.balance = value;
    }
}
class phisicalPerson extends bankAccount {
    deposit(value) {
        this.balance = value * 2;
    }
}
const pedroAccount = new phisicalPerson(123456);
bankAccount.returnNumberOfTheBank;
