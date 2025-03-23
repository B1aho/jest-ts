type binaryOperator = (x: number | bigint, y: number | bigint) => number | bigint

interface ICalculator {
    add: binaryOperator;
    substract: binaryOperator;
    divide: binaryOperator;
    multiple: binaryOperator;
    pow: binaryOperator;
    isFloat: (x: number) => boolean;
    isBigInt: (x: number | bigint) => boolean;
}

export const calculator: ICalculator = {
    isFloat(x: number): boolean {
        return (isFinite(x) && !Number.isInteger(x))
    },

    isBigInt(x: number | bigint): boolean {
        return typeof x === 'bigint';
    },

    add(x, y) {
        if (this.isBigInt(x) || this.isBigInt(y)) {
            if (isNaN(Number(x)) || isNaN(Number(y))) return NaN;
            if (!isFinite(Number(x)) || !isFinite(Number(y))) {
                return !isFinite(Number(x)) ? x : y;
            }
            return (BigInt(x) + BigInt(y));
        }
        let sum = Number(x) + Number(y);
        return this.isFloat(sum) ? parseFloat(sum.toFixed(10)) : sum;
    },

    substract(x, y) {
        if (this.isBigInt(x) || this.isBigInt(y)) {
            if (isNaN(Number(x)) || isNaN(Number(y))) return NaN;
            if (!isFinite(Number(x)) || !isFinite(Number(y))) {
                return !isFinite(Number(x)) ? x : -y;
            }
            return (BigInt(x) - BigInt(y));
        }
        let substraction = Number(x) - Number(y);
        return this.isFloat(substraction) ? parseFloat(substraction.toFixed(10)) : substraction;
    },

    divide(x, y) {
        return 0;
    },

    multiple(x, y) {
        return 0;
    },

    pow(x, n) {
        return 0;
    },

}