import { capitalize } from "./capitalize";

describe('Base test cases', () => {
    it("Capitalize function exist", () => {
        expect(typeof capitalize).toBe("function");
    });

    it("Can capitalize word #1", () => {
        expect(capitalize('cat')).toBe('Cat');
    });

    it("Can capitalize one letter", () => {
        expect(capitalize('m')).toBe('M');
    });

    it("Can capitalize word #2", () => {
        expect(capitalize('dog')).toBe('Dog');
    });
})

describe("Advance test cases", () => {
    it("Capitalize string with trail numbers", () => {
        expect(capitalize('1ssds')).toBe('1Ssds');
    });

    it("Capitalize string with trail spaces", () => {
        expect(capitalize('    hi')).toBe('    Hi');
    });

    it("Capitalize string with both trail spaces and numbers", () => {
        expect(capitalize('    12212   21 hi')).toBe('    12212   21 Hi');
    });

    it("Capitalize empty string", () => {
        expect(capitalize("")).toBe("");
    })

    it("Capitalize string with other language string", () => {
        expect(capitalize("привет")).toBe("Привет");
    })
})