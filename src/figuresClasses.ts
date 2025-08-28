export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'blue' | 'green';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: Figure['color'],
    private a: number,
    private b: number,
    private c: number,
  ) {}

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100; // round down to 2 decimals
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: Figure['color'],
    private r: number,
  ) {}

  getArea(): number {
    const area = Math.PI * this.r * this.r;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Figure['color'],
    private width: number,
    private height: number,
  ) {}

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

// Helper
export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
