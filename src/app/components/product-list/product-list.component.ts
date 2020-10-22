import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../../models/Product';
import { HttpServiceService } from '../../services/http-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  productsObservable : Observable<Product[]>;

  displayProducts : Product[];

  constructor(private httpService : HttpServiceService) { }

  ngOnInit() {
    this.productsObservable = this.httpService.getProductData();
    this.productsObservable.subscribe((value : Product[]) => this.displayProducts = value);
  }

  onFilteredData(event : Product[]) : void{
    this.displayProducts = event;
  }

}