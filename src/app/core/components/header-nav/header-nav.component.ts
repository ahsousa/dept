import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../services/globals.service';

@Component({
  selector: 'dept-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  imageFormat: string;
  supportsWebP: boolean;

  constructor(public globals: GlobalsService) { }

  ngOnInit(): void {
    this.globals.getBrowser() === 'Chrome' || this.globals.getBrowser() === 'Firefox' ?
      this.supportsWebP = true :
      this.supportsWebP = false;
  }
}
