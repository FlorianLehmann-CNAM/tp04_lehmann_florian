import { Product } from './Product';

export class ShoppingCart{
    products: Article[];
}

export class Article extends Product{
    quantity : number;


    public static fromProduct(product : Product) : Article{
        return new Article(product.title, product.description, product.price, product.imgUrl, 1);
    }

    constructor(title: string, description: string, price: number, imgUrl: string, quantity: number){
        super(title, description, price, imgUrl);
        this.quantity = quantity;
    }

    
}