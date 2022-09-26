export interface Point {
  x: number;
  y: number;
}

export enum HexType {
  PointyTopped,
  FlatTopped,
}

const sqrt3 = Math.sqrt(3);

export class Hex {
  constructor(
    public center: Point,
    public type: HexType,
    public size: number
  ) {}

  corner(index: number): Point {
    const angle_deg =
      60 * index - (this.type === HexType.PointyTopped ? 30 : 0);
    const angle_rad = (Math.PI / 180) * angle_deg;
    return {
      x: this.center.x + this.size * Math.cos(angle_rad),
      y: this.center.y + this.size * Math.sin(angle_rad),
    };
  }

  get height(): number {
    if (this.type === HexType.PointyTopped) {
      return this.maximalDiameter;
    } else {
      return this.minimalDiameter;
    }
  }

  get depth(): number {
    return Math.sqrt(
      -((this.maximalDiameter / 2) * this.maximalDiameter) / 2 +
        this.minimalDiameter * 2 * this.minimalDiameter * 2
    );
  }

  get volume(): number {
    return this.area * this.depth;
  }

  get sideLength(): number {
    return this.maximalDiameter / 2;
  }

  get area(): number {
    return (3 / 4) * this.width * this.height;
  }

  get circumradius(): number {
    return this.size;
  }

  get inradius(): number {
    return (this.size * sqrt3) / 2;
  }

  get width(): number {
    if (this.type === HexType.PointyTopped) {
      return this.minimalDiameter;
    } else {
      return this.maximalDiameter;
    }
  }

  get maximalDiameter(): number {
    return this.size * 2;
  }
  get minimalDiameter(): number {
    return 2 * this.inradius;
  }
}
