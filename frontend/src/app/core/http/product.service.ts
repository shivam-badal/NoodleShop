import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../modules/shop/models/product.model";


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  get(): Observable<Product[]> {
    return this.http.get('/api/products') as Observable<Product[]>;
  }

  getById(id: string): Observable<Product> {
    return this.http.get(`/api/products/${id}`) as Observable<Product>;
  }
}
