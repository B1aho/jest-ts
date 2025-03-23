import {reverseString} from "./reverseString"

describe("Basic test cases", () => {
    it("Function exist", () => {
        expect(reverseString).toBeDefined();
    });

    it("Reverse simple string", () => {
        expect(reverseString("abcdefg")).toBe("gfedcba");
    })

    it("Reverse simple string-2", () => {
        expect(reverseString("QWERTY")).toBe("YTREWQ");
    })
}) 