class Dimension {
  constructor(props: {
    weight: number;
    length: number;
    height: number;
    width: number;
  }) {
    Object.assign(props, this);
  }
  public weight: number;
  public length: number;
  public height: number;
  public width: number;
}
class Image {
  constructor(props: { url: string; alt: string }) {
    Object.assign(props, this);
  }
  public url: string;
  public alt: string;
}

class Product {
  public readonly id: string;
  public name: string;
  public price: number;
  public description: string;
  public slug: string;
  public dimension: Dimension;
  public images: Image[];

  constructor(props: Product) {
    Object.assign(this, props);
  }
}

export { Product, Dimension };
