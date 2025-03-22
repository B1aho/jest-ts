import { capitalize } from "./capitalize";

it("capitalize exist", () => {
    expect(capitalize).toBeDefined();
});

it("Capitalize word", () => {
    expect(capitalize('word')).toBe('Word');
});