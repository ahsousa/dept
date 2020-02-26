import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Work } from '../interfaces/work';


@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private url = '../../../assets/work.json';
  constructor(private http: HttpClient) { }

  getWorksDone(): Observable<Work[]> {
    return this.http.get<Work[]>(this.url).pipe(
      tap(
        works => console.log(works)
      ));
  }
}
