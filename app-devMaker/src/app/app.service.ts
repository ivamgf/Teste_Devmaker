import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: Http
  ) { }
  getCep() {
    return this.http.get('https://viacep.com.br/ws/01001000/json/')
    .pipe(map(data => data.json()));
  }
  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map(data => data.json()));
  }
  getPhoto() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .pipe(map(data => data.json()));
  }
}
