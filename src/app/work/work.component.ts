import { Component, OnInit } from '@angular/core';
import { WorkService } from '../core/services/work.service';
import { Work } from '../core/interfaces/work';
import { GlobalsService } from '../core/services/globals.service';

@Component({
  selector: 'dept-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  works = [] as Work[];
  webpSupported: boolean;

  constructor(
    private workService: WorkService,
    private globals: GlobalsService
    ) { }

  ngOnInit(): void {
    this.globals.getBrowser() === 'Chrome' || this.globals.getBrowser() === 'Firefox' ?
      this.webpSupported = true : this.webpSupported = false;

    this.workService.getWorksDone().subscribe(works => {
      this.works = works;
      // console.log(this.works);
    });
  }

}
