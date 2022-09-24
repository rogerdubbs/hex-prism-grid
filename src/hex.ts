export enum HexType {
  PointyTopped,
}
export class Hex {
  constructor(
    public center: { x: number; y: number },
    public type: HexType,
    public size: number
  ) {}
}
