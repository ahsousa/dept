import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalsService } from '../core/services/globals.service';

@Component({
  selector: 'dept-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageFormat: string;
  supportsWebP: boolean;

  constructor(public globals: GlobalsService) { }

  ngOnInit(): void {
    this.globals.getBrowser() === 'Chrome' || this.globals.getBrowser() === 'Firefox' ?
      this.supportsWebP = true :
      this.supportsWebP = false;
  }

}
