import { caesarCipher } from "./caesarCipher";

describe("Base test cases", () => {
    it("caesarCipher function exist", () => {
        expect(typeof caesarCipher).toBe("function");
    });

    it("Basic cipher #1", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc");
    });

    it("Basic cipher #2", () => {
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });
});