import { caesarCipher } from "./caesarCipher";

describe("Caesar test cases", () => {
    it("caesarCipher function exist", () => {
        expect(typeof caesarCipher).toBe("function");
    });

    it("Basic cipher case", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc");
    });

    it("Cipher keep register", () => {
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });

    it("Cipher not change punctuation", () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

    it("Advance case", () => {
        expect(caesarCipher("SDFDSFdsfdsfdsmf/..//./123\"        ewdflkewfe\
        // ewf!!ssss--xc  m", -33)).toBe("LWYWLYwlywlywlfy/..//./123\"        xpwyedxpyx\
        // xpy!!llll--qv  f")
    })
});