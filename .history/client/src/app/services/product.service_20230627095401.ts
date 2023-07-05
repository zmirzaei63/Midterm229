import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const baseUrl = 'http://localhost:8080/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.____<Product[]>(baseUrl);
  }

  get(id: any): Observable<Product> {
    return this.http.___(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.____(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.____(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.____(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.____(baseUrl);
  }

  findByName(name: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?name=${name}`);
  }
}
