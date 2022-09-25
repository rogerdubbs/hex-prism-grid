import { Hex, HexType } from "./hex";

describe("A pointy hexagon of size 10", () => {
  const hex = new Hex({ x: 0, y: 0 }, HexType.PointyTopped, 10);
  const halfWidth = (10 * Math.sqrt(3)) / 2;
  it("is centered at the designated spot", () => {
    expect(hex.center).toStrictEqual({ x: 0, y: 0 });
  });
  it("is recorded as pointy-topped", () => {
    expect(hex.type).toBe(HexType.PointyTopped);
  });
  it("has the correct size", () => {
    expect(hex.type).toBe(HexType.PointyTopped);
  });
  it("has the correct points", () => {
    expect(hex.corner(0).x).toBeCloseTo(halfWidth);
    expect(hex.corner(0).y).toBeCloseTo(-5);
    expect(hex.corner(1).x).toBeCloseTo(halfWidth);
    expect(hex.corner(1).y).toBeCloseTo(5);
    expect(hex.corner(2).x).toBeCloseTo(0);
    expect(hex.corner(2).y).toBeCloseTo(10);
    expect(hex.corner(3).x).toBeCloseTo(-halfWidth);
    expect(hex.corner(3).y).toBeCloseTo(5);
    expect(hex.corner(4).x).toBeCloseTo(-halfWidth);
    expect(hex.corner(4).y).toBeCloseTo(-5);
    expect(hex.corner(5).x).toBeCloseTo(0);
    expect(hex.corner(5).y).toBeCloseTo(-10);
  });
});
