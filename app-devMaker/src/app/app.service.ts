import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: Http
  ) { }
  getCep() {
    return this.http.get('https://desafia.sae.digital/api/shows/')
    .pipe(map(data => data.json()));
  }
}
