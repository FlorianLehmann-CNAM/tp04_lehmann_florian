import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "../../models/Product";
import { HttpServiceService } from "../../services/http-service.service";
import { of } from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  productsObservable: Observable<Product[]>;

  displayProducts: Observable<Product[]>;

  constructor(private httpService: HttpServiceService) {}

  ngOnInit() {
    this.productsObservable = this.httpService.getProductData();
    this.productsObservable.subscribe(
      (value: Product[]) => (this.displayProducts = of(value))
    );
  }

  onFilteredData(event: Product[]): void {
    this.displayProducts = of(event);
  }
}
