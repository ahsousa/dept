import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GlobalsService } from '../core/services/globals.service';

@Component({
  selector: 'dept-non-sponsored-projects',
  templateUrl: './non-sponsored-projects.component.html',
  styleUrls: ['./non-sponsored-projects.component.scss']
})
export class NonSponsoredProjectsComponent implements OnInit, OnChanges {
  @Input() firstArticles;
  @Input() secondArticles;
  @Input() firstDoubleArticles;
  @Input() secondDoubleArticles;
  @Input() categoryTerm;
  webpSupported: boolean;

  constructor(public globals: GlobalsService) { }

  ngOnInit(): void {
    if (!this.categoryTerm || this.categoryTerm === undefined) {
      this.categoryTerm = '';
    }

    this.globals.getBrowser() === 'Chrome' || this.globals.getBrowser() === 'Firefox' ?
      this.webpSupported = true : this.webpSupported = false;
  }

  ngOnChanges(): void {
  }
}
