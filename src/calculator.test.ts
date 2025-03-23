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

    it("Add with bigint mix number infinite", () => {
        expect(calculator
            .add(9007199254741001n, Infinity))
            .toBe(Infinity);
    });

    it("Add with bigint mix NaN", () => {
        expect(calculator
            .add(9007199254741001n, NaN))
            .toBe(NaN);
    });
});