export interface Point {
  x: number;
  y: number;
}

export enum HexType {
  PointyTopped,
}

export class Hex {
  constructor(
    public center: Point,
    public type: HexType,
    public size: number
  ) {}

  corner(index: number): Point {
    const angle_deg = 60 * index - 30;
    const angle_rad = (Math.PI / 180) * angle_deg;
    return {
      x: this.center.x + this.size * Math.cos(angle_rad),
      y: this.center.y + this.size * Math.sin(angle_rad),
    };
  }
}
