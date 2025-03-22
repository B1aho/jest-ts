import { capitalize } from "./capitalize";

describe('Basic cases for capitilize function', () => {
    it("Function exist", () => {
        expect(capitalize).toBeDefined();
    });

    it("Can capitalize word", () => {
        expect(capitalize('word')).toBe('Word');
    });

    it("Can capitalize otherWord", () => {
        expect(capitalize('otherWord')).toBe('OtherWord');
    });
})

describe("Advance cases for function", () => {
    it("Handle trail numbers", () => {
        expect(capitalize('1ssds')).toBe('1Ssds');
    });

    it("Handle trail spaces", () => {
        expect(capitalize('    hi')).toBe('    Hi');
    });

    it("Handle both trail spaces and numbers", () => {
        expect(capitalize('    12212   21 hi')).toBe('    12212   21 Hi');
    });

    it("Handle empty string", () => {
        expect(capitalize("")).toBe("");
    })
})