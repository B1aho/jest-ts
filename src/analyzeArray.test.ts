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

    it("Unsorted array", () => {
        expect(analyzeArray([1, 8, 3, -4, 2, 6, 12, 1, -22, 3, 4, 66, 434, 3, 2, 34, 44, 4, 55, 435, 436, 55, 86, 8799, 998, 80, 43, -2]))
            .toEqual({
                average: 12,
                min: -22,
                max: 8799,
                length: 28
            });
    });
});