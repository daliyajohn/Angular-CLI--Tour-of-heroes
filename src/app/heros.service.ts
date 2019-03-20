import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  private heroesUrl = 'http://dummy.restapiexample.com/api/v1/employees';

  constructor(private http: HttpClient) { }

  createHero(name): Observable<any> {
    return this.http.post(this.heroesUrl, name);
    console.log('jjjj');
  }

}
