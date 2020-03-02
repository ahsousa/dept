import { Component, OnInit, Input } from '@angular/core';
import { WorkService } from '../core/services/work.service';
import { IWork } from '../core/interfaces/iwork';
import { GlobalsService } from '../core/services/globals.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'dept-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  // animations: [
  //   trigger('filter', [
  //     // ...
  //     state('open', style({
  //       height: '200px',
  //       opacity: 1,
  //       backgroundColor: 'yellow'
  //     })),
  //     state('closed', style({
  //       height: '100px',
  //       opacity: 0.5,
  //       backgroundColor: 'green'
  //     })),
  //     transition('open => closed', [
  //       animate('1s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s')
  //     ]),
  //   ])]
})
export class WorkComponent implements OnInit {

  isFiltered: boolean;
  works = [] as IWork[];
  firstSponsoredArticles = [] as IWork[];
  secondSponsoredArticles = [] as IWork[];
  firstNonSponsoredArticlesFourple = [] as IWork[];
  secondNonSponsoredArticlesFourple = [] as IWork[];
  firstNonSponsoredArticlesDouble = [] as IWork[];
  secondNonSponsoredArticlesDouble = [] as IWork[];

  filteredFirstSponsoredArticles = [] as IWork[];
  filteredSecondSponsoredArticles = [] as IWork[];
  filteredFirstNonSponsoredArticlesFourple = [] as IWork[];
  filteredSecondNonSponsoredArticlesFourple = [] as IWork[];
  filteredFirstNonSponsoredArticlesDouble = [] as IWork[];
  filteredSecondNonSponsoredArticlesDouble = [] as IWork[];

  industries = [];
  categories = [];
  filteredCategory: string;

  constructor(
    private workService: WorkService,
    private globals: GlobalsService
    ) { }

  ngOnInit(): void {
    this.workService.getWorksDone().subscribe(works => {
      /// for now we will assume that the projects without pics wont be able to be filtered
      this.works = works.filter(work => work.imgUrlPng && work.imgUrlWebp);

      this.secondSponsoredArticles = works
        .filter(work => work.type === 'triple' && work.sponsored === true && work.position === 2);

      this.firstSponsoredArticles = works
        .filter(work => work.type === 'triple' && work.sponsored === true && work.position === 1);

      this.firstNonSponsoredArticlesFourple = works
        .filter(work => work.type === 'fourple' && work.sponsored === false && work.position === 1);

      this.secondNonSponsoredArticlesFourple = works
        .filter(work => work.type === 'fourple' && work.sponsored === false && work.position === 2);

      this.firstNonSponsoredArticlesDouble = works
        .filter(work => work.type === 'double' && work.sponsored === false && work.position === 1);

      this.secondNonSponsoredArticlesDouble = works
        .filter(work => work.type === 'double' && work.sponsored === false && work.position === 2);

      /// get all unique industries
      this.industries = [...new Set(works.map(work => work.industry))];

      // get all unique client names
      this.categories = [...new Set(works.map(work => work.category))];
    });
  }

}
