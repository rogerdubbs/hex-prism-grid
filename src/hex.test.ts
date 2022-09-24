import { Hex, HexType } from "./hex";

test("A pointy hexagon of size 10 can be created", () => {
  const hex = new Hex({ x: 0, y: 0 }, HexType.PointyTopped, 10);
  expect(hex.center).toStrictEqual({ x: 0, y: 0 });
  expect(hex.type).toBe(HexType.PointyTopped);
  expect(hex.size).toBe(10);
});
