import { capitalize } from "./capitalize";

describe('Basic cases for capitilize function', () => {
    it("Function exist", () => {
        expect(capitalize).toBeDefined();
    });

    it("Can capitalize word", () => {
        expect(capitalize('cat')).toBe('Cat');
    });

    it("Can capitalize one letter", () => {
        expect(capitalize('m')).toBe('M');
    });

    it("Can capitalize word-2", () => {
        expect(capitalize('dog')).toBe('Dog');
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

    it("Handle other language string", () => {
        expect(capitalize("привет")).toBe("Привет");
    })
})