import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IWork } from '../interfaces/iwork';


@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private url = '../../../assets/work.json';
  constructor(private http: HttpClient) { }

  getWorksDone(): Observable<IWork[]> {
    return this.http.get<IWork[]>(this.url).pipe(
      tap(
        works => console.log(works)
      ));
  }
}
