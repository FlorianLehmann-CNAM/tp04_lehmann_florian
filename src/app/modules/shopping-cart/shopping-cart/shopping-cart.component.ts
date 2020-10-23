import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ClearShoppingCart, DelProduct } from 'src/app/store/actions/ShoppingCart.action';
import { Product } from 'src/app/models/Product';
import { Article } from 'src/app/models/ShoppingCart';
import { ShoppingCartState } from 'src/app/store/states/ShoppingCart.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

    products$ : Observable<Article[]>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.products$ = this.store.select(ShoppingCartState.GetProducts)
    }

    getTotalPriceFromProduct(product: Article) : number{
        return product.price * product.quantity;
    }
    
    getShoppingCartTotalPrice() : Observable<number>{
        return this.products$.pipe(
            map((value: Article[]) => value.map((p : Article) => p.quantity * p.price).reduce((acc, value) => acc + value, 0)),
        )
    }

    clearShoppingCart() : void{
        this.store.dispatch(new ClearShoppingCart());
    }

    deleteProduct(product : Article, deleteAll: boolean) : void{
        this.store.dispatch(new DelProduct(product, deleteAll));
    }
}
