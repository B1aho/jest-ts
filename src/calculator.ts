type binaryOperator = (x: number, y: number) => number

interface ICalculator {
    add: binaryOperator;
    substract: binaryOperator;
    divide: binaryOperator;
    multiple: binaryOperator;
    pow: binaryOperator;
}

export const calculator: ICalculator = {
    add(x, y) {
        return 0;
    },

    substract() {
        return 0;
    },

    divide() {
        return 0;
    },

    multiple() {
        return 0;
    },

    pow() {
        return 0;
    },

}