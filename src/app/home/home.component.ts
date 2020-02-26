import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalsService } from '../core/services/globals.service';

@Component({
  selector: 'dept-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  browser: string;
  imageFormat: string;
  supportsWebP: boolean;

  constructor(private globals: GlobalsService) { }

  ngOnInit(): void {
    this.browser = this.globals.getBrowser();
    // console.log(this.browser);
    this.browser === 'Chrome' || this.browser === 'Firefox' ? this.supportsWebP = true : this.supportsWebP = false;
    this.browser === 'Chrome' || this.browser === 'Firefox' ? this.imageFormat = 'webp' : this.imageFormat = 'png';
  }

  ngOnDestroy(): void {
    this.browser = '';
  }

}
