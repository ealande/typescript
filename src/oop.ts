class person {
    name: string;
    income?: number;

    constructor(name: string, income?: number) {
        this.name = name;
        this.income = income;
    }

    sayHello(): string {
        return `${this.name} said hello`;
    }
}

class bankAccount {
    protected balance : number = 9;
    accountNumber: number;

    constructor(accountNumber:number){
        this.accountNumber = accountNumber;
    }

    static returnNumberOfTheBank(){
        return 125;
    }

    private getBalance() {
        return this.balance;
    }

    deposit(value: number){
        this.balance = value;
    }
}

class phisicalPerson extends bankAccount {
    deposit(value: number): void {
        this.balance = value * 2;
    }
}

const pedroAccount = new phisicalPerson(123456)

bankAccount.returnNumberOfTheBank;