import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../core/services/globals.service';

@Component({
  selector: 'dept-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  logos = [];
  webpSupported: boolean;

  constructor(public globals: GlobalsService) { }

  ngOnInit(): void {
    this.globals.getBrowser() === 'Chrome' || this.globals.getBrowser() === 'Firefox' ?
      this.webpSupported = true : this.webpSupported = false;

    this.globals.getLogos().subscribe(logos => this.logos = logos);
  }

}
