import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  browser: string;
  private url = '../../../assets/icons.json';

  constructor(
    private deviceDetector: DeviceDetectorService,
    private http: HttpClient
    ) {
  }

  getBrowser() {
    return this.deviceDetector.browser;
  }

  getLogos(): Observable<any> {
    return this.http.get<any>(this.url).pipe(tap(data => console.log(data)));
  }
}
