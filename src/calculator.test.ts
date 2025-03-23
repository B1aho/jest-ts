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