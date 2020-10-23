export class Product{
  title: string;
  description: string;
  price: number;
  imgUrl : string;
  manufacturer: string;
  color : string;
  width: number;
  height: number;
  garantie: number;

  constructor(title: string, description: string, price: number, imgUrl: string, color: string, width: number, height: number, garantie: number){
    this.title = title;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
    this.color = color;
    this.width = width;
    this.height = height;
    this.garantie = garantie;
  }
}