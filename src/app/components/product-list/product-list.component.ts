import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "../../models/Product";
import { HttpServiceService } from "../../services/http-service.service";
import { of } from "rxjs";
import { Store } from '@ngxs/store';
import { AddProduct } from 'src/app/models/actions/ShoppingCart.action';
import { Article } from 'src/app/models/ShoppingCart';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  productsObservable: Observable<Product[]>;

  displayProducts: Observable<Product[]>;

  constructor(private httpService: HttpServiceService, private store : Store) {}

  ngOnInit() {
    this.productsObservable = this.httpService.getProductData();
    this.productsObservable.subscribe(
      (value: Product[]) => (this.displayProducts = of(value))
    );
  }

  onFilteredData(event: Product[]): void {
    this.displayProducts = of(event);
  }

  addProductToShopppingCart(product: Product) : void{
    let article : Article = Article.fromProduct(product);
    this.store.dispatch(new AddProduct(article));
  }
}
