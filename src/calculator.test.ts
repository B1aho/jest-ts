import { calculator } from "./calculator"

describe("All needed operators exist:", () => {
    it("Check add operator", () => {
        expect(typeof calculator.add).toBe("function");
    });

    it("Check substract operator", () => {
        expect(typeof calculator.substract).toBe("function");
    });

    it("Check divide operator", () => {
        expect(typeof calculator.divide).toBe("function");
    });

    it("Check multiple operator", () => {
        expect(typeof calculator.multiple).toBe("function");
    });

    it("Check pow operator", () => {
        expect(typeof calculator.pow).toBe("function");
    });
});

describe("Test cases for add operator", () => {
    it("Basic adding #1", () => {
        expect(calculator.add(10, 5)).toBe(15);
    });

    it("Basic adding #2", () => {
        expect(calculator.add(101, 2000)).toBe(2101);
    });

    it("Add float number", () => {
        expect(calculator.add(0.00123, 0.1234)).toBe(0.12463);
    });

    it("Add with NaN", () => {
        expect(calculator.add(NaN, 123)).toBe(NaN);
    });

    it("Add with infinite values #1", () => {
        expect(calculator.add(Infinity, 123)).toBe(Infinity);
    });

    it("Add with infinite values #2", () => {
        expect(calculator.add(-Infinity, 123)).toBe(-Infinity);
    });

    it("Add with infinite values #3", () => {
        expect(calculator.add(-Infinity, Infinity)).toBe(NaN);
    });

    it("Add with infinite values #4", () => {
        expect(calculator.add(Infinity, Infinity)).toBe(Infinity);
    });

    it("Add with bigint values #1", () => {
        expect(calculator
            .add(1122121323213123213312312321n, 1232132132213123123112312312n))
            .toBe(2354253455426246336424624633n);
    });

    it("Add with bigint mix number #1", () => {
        expect(calculator
            .add(9007199254740991n, 10))
            .toBe(9007199254741001n);
    });

    it("Add with bigint mix number #2", () => {
        expect(calculator
            .add(9007199254741001n, 10))
            .toBe(9007199254741011n);
    });

    it("Add with bigint mix number infinite #1", () => {
        expect(calculator
            .add(9007199254741001n, Infinity))
            .toBe(Infinity);
    });

    it("Add with bigint mix number infinite #2", () => {
        expect(calculator
            .add(9007199254741001n, -Infinity))
            .toBe(-Infinity);
    });

    it("Add with bigint mix NaN", () => {
        expect(calculator
            .add(9007199254741001n, NaN))
            .toBe(NaN);
    });
});

describe("Test cases for substarct operator", () => {
    it("Basic substraction #1", () => {
        expect(calculator.substract(10, 5)).toBe(5);
    });

    it("Basic substraction #2", () => {
        expect(calculator.substract(101, 2000)).toBe(-1899);
    });

    it("Substract float number", () => {
        expect(calculator.substract(0.00123, 0.1234)).toBe(-0.12217);
    });

    it("Substarct with NaN", () => {
        expect(calculator.substract(NaN, 123)).toBe(NaN);
    });

    it("Substract with infinite values #1", () => {
        expect(calculator.substract(Infinity, 123)).toBe(Infinity);
    });

    it("Substract with infinite values #2", () => {
        expect(calculator.substract(-Infinity, 123)).toBe(-Infinity);
    });

    it("Substarct with infinite values #3", () => {
        expect(calculator.substract(Infinity, Infinity)).toBe(NaN);
    });

    it("Substarct with infinite values #4", () => {
        expect(calculator.substract(-Infinity, Infinity)).toBe(-Infinity);
    });

    it("Substract with bigint values #1", () => {
        expect(calculator
            .substract(1122121323213123213312312321n, 1232132132213123123112312312n))
            .toBe(-110010808999999909799999991n);
    });

    it("Substract with bigint mix number", () => {
        expect(calculator
            .substract(9007199254741001n, 10))
            .toBe(9007199254740991n);
    });

    it("Substract with bigint mix number infinite #1", () => {
        expect(calculator
            .substract(9007199254741001n, Infinity))
            .toBe(-Infinity);
    });

    it("Substract with bigint mix number infinite #2", () => {
        expect(calculator
            .substract(Infinity, 9007199254741001n))
            .toBe(Infinity);
    });

    it("Substarct with bigint mix NaN", () => {
        expect(calculator
            .substract(9007199254741001n, NaN))
            .toBe(NaN);
    });
})

describe("Test cases for multiplication operator", () => {
    it("Basic multiplication #1", () => {
        expect(calculator.multiple(10, 5)).toBe(50);
    });

    it("Basic multiplication #2", () => {
        expect(calculator.multiple(101, 2000)).toBe(202000);
    });

    it("Multiplication float number", () => {
        expect(calculator.multiple(0.00123, 0.1234)).toBe(0.000151782);
    });

    it("Multiplication with NaN", () => {
        expect(calculator.multiple(NaN, 123)).toBe(NaN);
    });

    it("Multiplication with infinite values #1", () => {
        expect(calculator.multiple(Infinity, 123)).toBe(Infinity);
    });

    it("Multiplication with infinite values #2", () => {
        expect(calculator.multiple(-Infinity, -123)).toBe(Infinity);
    });

    it("Multiplication with infinite values #3", () => {
        expect(calculator.multiple(-Infinity, Infinity)).toBe(-Infinity);
    });

    it("Multiplication with infinite values #4", () => {
        expect(calculator.multiple(Infinity, 0)).toBe(NaN);
    });

    it("Multiplication with bigint values #1", () => {
        expect(calculator
            .multiple(1122121323213123213312312321n, 1232132132213123123112312312n))
            .toBe(1382601738572396596111291415883078685030873457837596152n);
    });

    it("Multiplication with bigint mix number", () => {
        expect(calculator
            .multiple(9007199254740991n, 10))
            .toBe(90071992547409910n);
    });

    it("Multiplication with bigint mix number infinite #1", () => {
        expect(calculator
            .multiple(9007199254741001n, Infinity))
            .toBe(Infinity);
    });

    it("Multiplication with bigint mix number infinite #2", () => {
        expect(calculator
            .multiple(9007199254741001n, -Infinity))
            .toBe(-Infinity);
    });

    it("Multiplication with bigint mix NaN", () => {
        expect(calculator
            .multiple(9007199254741001n, NaN))
            .toBe(NaN);
    });
});