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
    return this.http.get('viacep.com.br/ws/01001000/json/')
    .pipe(map(data => data.json()));
  }
}
