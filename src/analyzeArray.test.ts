import { analyzeArray } from "./analyzeArray";

describe("Basice test cases", () => {
    it("analyzeArray function exist", () => {
        expect(typeof analyzeArray).toBe("function");
    });

    it("Empty array", () => {
        expect(analyzeArray([])).toBe(null);
    });

    it("Basic sorted array", () => {
        expect(analyzeArray([1, 2, 3, 4])).toEqual({
            average: 3,
            length: 4,
            max: 4,
            min: 1
        });
    });
});

describe("Advance test cases", () => {
    it("Small unsorted array", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });
});