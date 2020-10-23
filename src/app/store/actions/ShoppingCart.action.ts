import { Product } from '../../models/Product';
import { Article } from '../../models/ShoppingCart';

export class AddProduct{
    static readonly type = '[ShoppingCart] Add';

    constructor(public payload: Article){}
}

export class DelProduct{
    static readonly type = "[ShoppingCart] Del";

    constructor(public payload: Article, public deleteAll: boolean){}
}

export class ClearShoppingCart{
    static readonly type = "[ShoppingCart] Clear";

    constructor(){}
}