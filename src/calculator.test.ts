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

    it("Multiple float number", () => {
        expect(calculator.multiple(0.00123, 0.1234)).toBe(0.000151782);
    });

    it("Multiple with NaN", () => {
        expect(calculator.multiple(NaN, 123)).toBe(NaN);
    });

    it("Multiple with infinite values #1", () => {
        expect(calculator.multiple(Infinity, 123)).toBe(Infinity);
    });

    it("Multiple with infinite values #2", () => {
        expect(calculator.multiple(-Infinity, -123)).toBe(Infinity);
    });

    it("Multiple with infinite values #3", () => {
        expect(calculator.multiple(-Infinity, Infinity)).toBe(-Infinity);
    });

    it("Multiple with infinite values #4", () => {
        expect(calculator.multiple(Infinity, 0)).toBe(NaN);
    });

    it("Multiple with bigint values #1", () => {
        expect(calculator
            .multiple(1122121323213123213312312321n, 1232132132213123123112312312n))
            .toBe(1382601738572396596111291415883078685030873457837596152n);
    });

    it("Multiple with bigint mix number", () => {
        expect(calculator
            .multiple(9007199254740991n, 10))
            .toBe(90071992547409910n);
    });

    it("Multiple with bigint mix number infinite #1", () => {
        expect(calculator
            .multiple(9007199254741001n, Infinity))
            .toBe(Infinity);
    });

    it("Multiple with bigint mix number infinite #2", () => {
        expect(calculator
            .multiple(9007199254741001n, -Infinity))
            .toBe(-Infinity);
    });

    it("Multiple with bigint mix NaN", () => {
        expect(calculator
            .multiple(9007199254741001n, NaN))
            .toBe(NaN);
    });
});

describe("Test cases for division operator", () => {
    it("Basic division #1", () => {
        expect(calculator.divide(10, 5)).toBe(2);
    });

    it("Basic division #2", () => {
        expect(calculator.divide(101, 2000)).toBe(0.0505);
    });

    it("Basic division #3", () => {
        expect(calculator.divide(101, 0)).toBe(Infinity);
    });

    it("Basic division #4", () => {
        expect(calculator.divide(0, 0)).toBe(NaN);
    });

    it("Basic division #5", () => {
        expect(calculator.divide(0, 12)).toBe(0);
    });

    it("Divide float number", () => {
        expect(calculator.divide(0.00123, 0.1234)).toBeCloseTo(0.009967585);
    });

    it("Divide with NaN", () => {
        expect(calculator.divide(NaN, 123)).toBe(NaN);
    });

    it("Divide with infinite values #1", () => {
        expect(calculator.divide(Infinity, 123)).toBe(Infinity);
    });

    it("Divide with infinite values #2", () => {
        expect(calculator.divide(-Infinity, -123)).toBe(Infinity);
    });

    it("Divide with infinite values #3", () => {
        expect(calculator.divide(-Infinity, Infinity)).toBe(NaN);
    });

    it("Divide with infinite values #4", () => {
        expect(calculator.divide(Infinity, 0)).toBe(Infinity);
    });

    it("Divide with bigint values #1", () => {
        expect(calculator
            .divide(1122121323213123213312312321n, 1232132132213123123112312312n))
            .toBe(NaN);
    });

    it("Divide with bigint values #2", () => {
        expect(calculator
            .divide(1122121323213123213312312321n, 0))
            .toBe(NaN);
    });

    it("Divide with bigint mix number", () => {
        expect(calculator
            .divide(90071992547409910n, 10))
            .toBe(9007199254740991n);
    });

    it("Divide with bigint mix number infinite #1", () => {
        expect(calculator
            .divide(9007199254741001n, Infinity))
            .toBe(Infinity);
    });

    it("Divide with bigint mix number infinite #2", () => {
        expect(calculator
            .divide(9007199254741001n, -Infinity))
            .toBe(-Infinity);
    });

    it("Divide with bigint mix NaN", () => {
        expect(calculator
            .divide(9007199254741001n, NaN))
            .toBe(NaN);
    });
});

describe("Test cases for pow operator", () => {
    it("Basic pow #1", () => {
        expect(calculator.pow(2, 10)).toBe(1024);
    });

    it("Basic pow #2", () => {
        expect(calculator.pow(2, -10)).toBeCloseTo(0.0009765625);
    });

    it("Pow with float exponent", () => {
        expect(calculator.pow(100, 0.5)).toBe(10);
    });

    it("Pow with zero exponent", () => {
        expect(calculator.pow(102330, 0)).toBe(1);
    });

    it("Pow zero", () => {
        expect(calculator.pow(0, 121342)).toBe(0);
    });

    it("Pow negative value", () => {
        expect(calculator.pow(-32, 9)).toBe(-35184372088832);
    });

    it("Pow with NaN", () => {
        expect(calculator.pow(2, NaN)).toBe(NaN);
    });

    it("Pow with Infinity", () => {
        expect(calculator.pow(2, Infinity)).toBe(Infinity);
    });

    it("Pow with BigInt", () => {
        expect(calculator.pow(1000000000000000000n, 2))
            .toBe(1000000000000000000000000000000000000n);
    });

    it("Pow with BigInt and negative exponent", () => {
        expect(() => calculator.pow(1000000000000000000n, -2))
            .toThrow("The exponent must be a non-negative number");
    });

});