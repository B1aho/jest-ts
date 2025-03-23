import { reverseString } from "./reverseString"

describe("Base test cases", () => {
    it("Function exist", () => {
        expect(typeof reverseString).toBe("function");
    });

    it("Reverse simple string #1", () => {
        expect(reverseString("abcdefg")).toBe("gfedcba");
    });

    it("Reverse simple string #2", () => {
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
    it("Reverse string with trail spaces", () => {
        expect(reverseString("   hello   ")).toBe("   olleh   ");
    });

    it("Reverse string with between spaces", () => {
        expect(reverseString("hel   lo")).toBe("ol   leh");
    });

    it("Reverse string with different language", () => {
        expect(reverseString("Привет, как дела?")).toBe("?алед как ,тевирП");
    });

    it("Reverse string with emojis", () => {
        expect(reverseString("Awesome🚀🔥")).toBe("🔥🚀emosewA");
    });

    it("Handle long string", () => {
        expect(reverseString("a".repeat(10000))).toBe("a".repeat(10000));
    });
});