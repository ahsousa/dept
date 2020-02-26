import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  browser: string;

  constructor(private deviceDetector: DeviceDetectorService) {
  }

  getBrowser() {
    return this.deviceDetector.browser;
  }
}
