import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Product } from '../models/Product';

@Injectable()
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getProductData() : Observable<Product[]>{

    return this.http.get<Product[]>(environment.baseUrl + "/Products.json");
  }

  getProductById(id : number) : Observable<Product>{
      return this.getProductData().pipe(
          map((value: Product[]) => value.filter((p : Product) => p.id === id)[0])
      )
  }


}