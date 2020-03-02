import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { GlobalsService } from '../../services/globals.service';
import { IWork } from '../../interfaces/iwork';


@Component({
  selector: 'dept-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() works;
  @Input() categories;
  @Input() industries;

  filteredArray = [] as IWork[];

  @Output() filtered: EventEmitter<any> = new EventEmitter();
  isFiltered: boolean;
  industryFilter: string;
  categoryFilter: string;

  webpSupported: boolean;

  constructor(private globals: GlobalsService) { }

  ngOnInit(): void {
    this.isFiltered = false;
    this.industryFilter = 'all industries';
    this.categoryFilter = 'all categories';
    this.globals.getBrowser() === 'Chrome' || this.globals.getBrowser() === 'Firefox' ?
      this.webpSupported = true : this.webpSupported = false;
  }

  filterCategory(ev) {
    this.categoryFilter = '';
    this.categoryFilter = ev;
    this.filterArray(ev, 'category');
  }

  filterIndustry(ev) {
    this.industryFilter = '';
    this.industryFilter = ev;
    this.filterArray(ev, 'industry');
  }

  filterArray(word: string, prop: string): void {

    console.log(word, prop);
  //   if (this.industryFilter && this.categoryFilter) {

  //     if (this.categoryFilter === 'all categories' && this.industryFilter === 'all industries') {
  //       this.isFiltered = false;
  //       this.filtered.emit(this.isFiltered);
  //       return;

  //     } else if (this.categoryFilter !== 'all categories' && this.industryFilter !== 'all industries') {
  //       this.isFiltered = true;
  //       this.filtered.emit(this.isFiltered);
  //       this.filterArray = this.works
  //         .filter(work => work.industry === this.industryFilter && work.category === this.categoryFilter);

  //     } else if (this.categoryFilter === 'all categories' && this.industryFilter !== 'all industries') {
  //       this.isFiltered = true;
  //       this.filtered.emit(this.isFiltered);
  //       this.filterArray = this.works
  //         .filter(work => work.industry === this.industryFilter);

  //     } else if (this.categoryFilter !== 'all categories' && this.industryFilter === 'all industries') {
  //       this.isFiltered = true;
  //       this.filtered.emit(this.isFiltered);
  //       this.filterArray = this.works
  //         .filter(work => work.category === this.categoryFilter);
  //     }

  //   } else {
  //     this.isFiltered = true;
  //     this.filtered.emit(this.isFiltered);
  //     this.filteredArray = this.works.filter(work => work[prop] === word);
  //     console.log(this.filteredArray);
  //   }
  }

}
