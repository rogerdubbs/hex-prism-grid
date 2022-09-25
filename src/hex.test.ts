import { Hex, HexType } from "./hex";

describe("A pointy hexagon of size 10", () => {
  const hex = new Hex({ x: 0, y: 0 }, HexType.PointyTopped, 10);
  it("is centered at the designated spot", () => {
    expect(hex.center).toStrictEqual({ x: 0, y: 0 });
  });
  it("is recorded as pointy-topped", () => {
    expect(hex.type).toBe(HexType.PointyTopped);
  });
  it("has the correct size", () => {
    expect(hex.size).toBe(10);
  });
  it("has an inradius of 8.66", () => {
    expect(hex.inradius).toBeCloseTo(8.66);
  });
  it("has a maximalDiameter of 20", () => {
    expect(hex.maximalDiameter).toBeCloseTo(20);
  });
  it("has a minimalDiameter of 17.32", () => {
    expect(hex.minimalDiameter).toBeCloseTo(17.32);
  });
  it("has the same circumradius as size", () => {
    expect(hex.circumradius).toBe(hex.size);
  });
  it("has a width equal to the minimalDiameter", () => {
    expect(hex.width).toBeCloseTo(hex.minimalDiameter);
  });
  it("has a height equal to the maximalDiameter", () => {
    expect(hex.height).toBeCloseTo(hex.maximalDiameter);
  });
  it("has the correct corners", () => {
    expect(hex.corner(0).x).toBeCloseTo(hex.width / 2);
    expect(hex.corner(0).y).toBeCloseTo(-hex.height / 4);
    expect(hex.corner(1).x).toBeCloseTo(hex.width / 2);
    expect(hex.corner(1).y).toBeCloseTo(hex.height / 4);
    expect(hex.corner(2).x).toBeCloseTo(0);
    expect(hex.corner(2).y).toBeCloseTo(hex.height / 2);
    expect(hex.corner(3).x).toBeCloseTo(-hex.width / 2);
    expect(hex.corner(3).y).toBeCloseTo(hex.height / 4);
    expect(hex.corner(4).x).toBeCloseTo(-hex.width / 2);
    expect(hex.corner(4).y).toBeCloseTo(-hex.height / 4);
    expect(hex.corner(5).x).toBeCloseTo(0);
    expect(hex.corner(5).y).toBeCloseTo(-hex.height / 2);
  });
});

describe("A flat topped hexagon of size 10", () => {
  const hex = new Hex({ x: 0, y: 0 }, HexType.FlatTopped, 10);
  it("is centered at the designated spot", () => {
    expect(hex.center).toStrictEqual({ x: 0, y: 0 });
  });
  it("is recorded as flat-topped", () => {
    expect(hex.type).toBe(HexType.FlatTopped);
  });
  it("has the correct size", () => {
    expect(hex.size).toBe(10);
  });
  it("has the same circumradius as size", () => {
    expect(hex.circumradius).toBe(hex.size);
  });
  it("has a width equal to the maximalDiameter", () => {
    expect(hex.width).toBeCloseTo(hex.maximalDiameter);
  });
  it("has an inradius of 8.66", () => {
    expect(hex.inradius).toBeCloseTo(8.66);
  });
  it("has a height equal to the minimalDiameter", () => {
    expect(hex.height).toBeCloseTo(hex.minimalDiameter);
  });
  it("has a maximalDiameter of 20", () => {
    expect(hex.maximalDiameter).toBeCloseTo(20);
  });
  it("has a minimalDiameter of 17.32", () => {
    expect(hex.minimalDiameter).toBeCloseTo(17.32);
  });
  it("has the correct corners", () => {
    expect(hex.corner(0).x).toBeCloseTo(hex.width / 2);
    expect(hex.corner(0).y).toBeCloseTo(0);
    expect(hex.corner(1).x).toBeCloseTo(hex.width / 4);
    expect(hex.corner(1).y).toBeCloseTo(hex.height / 2);
    expect(hex.corner(2).x).toBeCloseTo(-hex.width / 4);
    expect(hex.corner(2).y).toBeCloseTo(hex.height / 2);
    expect(hex.corner(3).x).toBeCloseTo(-hex.width / 2);
    expect(hex.corner(3).y).toBeCloseTo(0);
    expect(hex.corner(4).x).toBeCloseTo(-hex.width / 4);
    expect(hex.corner(4).y).toBeCloseTo(-hex.height / 2);
    expect(hex.corner(5).x).toBeCloseTo(hex.width / 4);
    expect(hex.corner(5).y).toBeCloseTo(-hex.height / 2);
  });
});
