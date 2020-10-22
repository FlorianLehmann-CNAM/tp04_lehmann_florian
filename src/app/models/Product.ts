export class Product{
  title: string;
  description: string;
  price: number;
  imgUrl : string;

  constructor(title: string, description: string, price: number, imgUrl: string){
    this.title = title;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}