import { reverseString } from "./reverseString"

describe("Basic test cases", () => {
    it("Function exist", () => {
        expect(reverseString).toBeDefined();
    });

    it("Reverse simple string", () => {
        expect(reverseString("abcdefg")).toBe("gfedcba");
    });

    it("Reverse simple string-2", () => {
        expect(reverseString("QWERTY")).toBe("YTREWQ");
    });

    it("Reverse single char", () => {
        expect(reverseString("b")).toBe("b");
    });

    it("Reverse empty string", () => {
        expect(reverseString("")).toBe("");
    })
});

describe("Advance test cases", () => {
});