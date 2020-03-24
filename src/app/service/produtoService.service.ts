import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  getProduto(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  createProduto(produto: Object): Observable<Object> {
    return this.http.post(`${this.url}`, produto);
  }

  updateProduto(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  deleteProduto(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  getProdutoList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }


}
