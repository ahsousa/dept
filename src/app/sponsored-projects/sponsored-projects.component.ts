import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IWork } from '../core/interfaces/iwork';
import { GlobalsService } from '../core/services/globals.service';

@Component({
  selector: 'dept-sponsored-projects',
  templateUrl: './sponsored-projects.component.html',
  styleUrls: ['./sponsored-projects.component.scss']
})
export class SponsoredProjectsComponent implements OnChanges, OnInit {
  @Input() firstArticles;
  @Input() secondArticles;
  @Input()categoryTerm ;
  webpSupported: boolean;

  firstBigArticle: IWork;
  firstSmallArticles = [] as IWork[];

  secondBigArticle: IWork;
  secondSmallArticles = [] as IWork[];

  constructor(public globals: GlobalsService) { }


  ngOnInit(): void {
    this.globals.getBrowser() === 'Chrome' || this.globals.getBrowser() === 'Firefox' ?
      this.webpSupported = true : this.webpSupported = false;

  }


  ngOnChanges(): void {
    if (this.firstArticles || this.firstArticles !== undefined) {
      this.firstArticles.filter(art => {
        (art.imgUrlWebp || art.imgUrlPng) ?
          this.firstBigArticle = art :
          this.firstSmallArticles.push(art);
      });
    }

    if (this.secondArticles || this.secondArticles !== undefined) {
      this.secondArticles.filter(art => {
        (art.imgUrlWebp || art.imgUrlPng) ?
          this.secondBigArticle = art :
          this.secondSmallArticles.push(art);
      });
    }
  }



}
