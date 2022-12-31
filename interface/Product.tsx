export class Product {
    public name: string;
    public price: number;
    public description: string;
    public slug: string;
    public images: string[];
    constructor(
        name: string,
        price: number,
        description: string,
        slug: string,
        images: string[]
        ) {
            this.name = name;
            this.price = price;
            this.description = description;
            this.slug = slug;
            this.images = images;
    }
}