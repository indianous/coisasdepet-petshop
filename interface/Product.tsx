export class Product {
  public name: string
  public price: number
  public description: string
  public slug: string
  public images: string[]
  constructor () {
    this.name = 'Produto 1'
    this.price = 5
    this.description = 'Lorem Ipsum'
    this.slug = 'produto-1'
    this.images = [
      'https://images.pexels.com/photos/5946087/pexels-photo-5946087.jpeg',
      'https://images.pexels.com/photos/4032973/pexels-photo-4032973.jpeg'
    ]
  }
}
