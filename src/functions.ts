function calculateArea(base: number, height: number): number {
    return base * height;
}

const calculateArea2 = (base: number, height: number): number => base * height;

function sum (...numbers: number[]): void{
    //numbers.reduce();
    console.log(numbers)
}

function test(): string | number {
    if (10 > 5){
        return 'ten is bigger than five'
    } else {
        return 5
    }
}

const testResult = test();
