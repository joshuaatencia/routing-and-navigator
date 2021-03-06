import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) {

  }

  getUsuarios(): Observable<any> {
    const url = `https://dummyapi.io/data/api/user?page=2&limit=20`;
    return this.http.get(url, { headers: { 'app-id': '603fbffc939f7be8120b9cbb' } });
  }
}
