const { computeTotalPrice, getSetsOfUniqueProducts } = require("./priceCalculator");

describe("Calculate Price", () => {
    test("['A','A','B','B','C','C','D','E']", () => {
        expect(getSetsOfUniqueProducts(['A','A','B','B','C','C','D','E'])).toEqual([['A','B','C','D','E'], ['A','B','C']]);
    });

    test("['A','B','C']", () => {
        expect(getSetsOfUniqueProducts(['A','B','C'])).toEqual([['A','B','C']]);
    });

    test("['B','B','B']", () => {
        expect(getSetsOfUniqueProducts(['B','B','B'])).toEqual([['B'], ['B'], ['B']]);
    });

    test("['A','A','B','B','C','C','D','E']", () => {
        expect(computeTotalPrice(['A','A','B','B','C','C','D','E'])).toBe(1928.55);
    });

    test("['A','B','C','D','E']", () => {
        expect(computeTotalPrice(['A','B','C','D','E'])).toBe(1121.25);
    });

    test("['B','C','D','E']", () => {
        expect(computeTotalPrice(['B','C','D','E'])).toBe(956.80);
    });

    test("['A','B','C']", () => {
        expect(computeTotalPrice(['A','B','C'])).toBe(807.30);
    });

    test("['D','E']", () => {
        expect(computeTotalPrice(['D','E'])).toBe(568.10);
    });

    test("['C']", () => {
        expect(computeTotalPrice(['C'])).toBe(299.00);
    });

    test("[]", () => {
        expect(computeTotalPrice([])).toBe(0.00);
    });

    test("['E','E']", () => {
        expect(computeTotalPrice(['E','E'])).toBe(598.00);
    });
});