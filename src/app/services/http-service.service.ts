import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Product } from '../models/Product';

@Injectable()
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getProductData() : Observable<Product[]>{

    return this.http.get<Product[]>(environment.baseUrl + "/Products.json");
  }


}