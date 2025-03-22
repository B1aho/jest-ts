import { capitalize } from "./capitalize";

describe('Basic tests for capitilize function', () => {
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