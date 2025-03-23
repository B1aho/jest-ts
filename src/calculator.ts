type BinaryOperator = (x: number | bigint, y: number | bigint) => number | bigint;
type Operator = '+' | '-' | '*' | '/';
type NumberAll = bigint | number;

interface ICalculator {
    add: BinaryOperator;
    substract: BinaryOperator;
    divide: BinaryOperator;
    multiple: BinaryOperator;
    pow: (x: NumberAll, n: number) => NumberAll;
    isFloat: (x: number) => boolean;
    isBigInt: (x: NumberAll) => boolean;
    bigintHelper: (x: NumberAll, y: NumberAll, operator: Operator) => NumberAll;
}

export const calculator: ICalculator = {
    isFloat(x: number): boolean {
        return (isFinite(x) && !Number.isInteger(x))
    },

    isBigInt(x: number | bigint): boolean {
        return typeof x === 'bigint';
    },

    bigintHelper(x, y, operator) {
        if (isNaN(Number(x)) || isNaN(Number(y))) return NaN;
        if (!isFinite(Number(x)) || !isFinite(Number(y))) {
            return !isFinite(Number(x))
                ? x
                : operator === '-'
                    ? -y
                    : y;
        }
        switch (operator) {
            case "*":
                return (BigInt(x) * BigInt(y));
            case "/":
                if (y === 0n || y === 0) return NaN;
                return (BigInt(x) % BigInt(y) === 0n)
                    ? BigInt(x) / BigInt(y)
                    : NaN;
            case "+":
                return (BigInt(x) + BigInt(y));
            case "-":
                return (BigInt(x) - BigInt(y));
        }
    },

    add(x, y) {
        if (this.isBigInt(x) || this.isBigInt(y))
            return this.bigintHelper(x, y, "+");

        let sum = Number(x) + Number(y);
        return this.isFloat(sum) ? parseFloat(sum.toFixed(10)) : sum;
    },

    substract(x, y) {
        if (this.isBigInt(x) || this.isBigInt(y))
            return this.bigintHelper(x, y, "-");
        let substraction = Number(x) - Number(y);
        return this.isFloat(substraction) ? parseFloat(substraction.toFixed(10)) : substraction;
    },

    multiple(x, y) {
        if (this.isBigInt(x) || this.isBigInt(y))
            return this.bigintHelper(x, y, "*");

        let multiplication = Number(x) * Number(y);
        return this.isFloat(multiplication) ? parseFloat(multiplication.toFixed(10)) : multiplication;
    },

    divide(x, y) {
        if (this.isBigInt(x) || this.isBigInt(y))
            return this.bigintHelper(x, y, "/");

        let division = Number(x) / Number(y);
        return this.isFloat(division) ? parseFloat(division.toFixed(10)) : division;
    },

    // Fast pow algorithm - O(logn)
    pow(x, n) {
        if (n < 0 && typeof x === "bigint")
            throw ("The exponent must be a non-negative number");
        if (typeof x === "bigint")
            return x ** BigInt(n);
        const isValidForFastPow = this.isFloat(n) || isNaN(x) || isNaN(n) || !isFinite(x) || !isFinite(n);
        if (isValidForFastPow)
            return x ** n;
        if (n < 0) {
            x = 1 / Number(x);
            n = -n;
        }
        let result = 1;
        while (n > 0) {
            if (n % 2 === 1) {
                result *= x;
            }
            x *= x;
            n = Math.floor(n / 2);
        }
        return result;
    },

}