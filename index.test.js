const calculateBonus = require("./index");

describe("Bonus culculation function", () => {
  test("Should return correct bonus", () => {
    expect(calculateBonus(15, 10)).toBe(25);
    expect(calculateBonus(30, 25)).toEqual(50);
  });

  test("Should return correct bonus comparing to other values", () => {
    expect(calculateBonus(13, 26)).toBeLessThanOrEqual(50);
    expect(calculateBonus(43, 12)).toBeGreaterThanOrEqual(49);
  });

  test("Bonus should be culculated when used numvers are float", () => {
    expect(calculateBonus(13.03, 10.1)).toBeCloseTo(23.13);
    expect(calculateBonus(43.4, 12.02)).toBe(50);
  });
});

describe("Testing odject assigment", () => {
  test("object assignment", () => {
    const data = { one: 30 };
    data["two"] = 5;
    expect(data).toEqual({ one: 30, two: 5 });
  });

  test("object assignment", () => {
    const data = { one: 30 };
    data["two"] = null;
    expect(data).toStrictEqual({ one: 30, two: null });
  });
});
