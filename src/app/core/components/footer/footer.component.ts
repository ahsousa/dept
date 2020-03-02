import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../services/globals.service';
import * as moment from 'moment';

@Component({
  selector: 'dept-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  webpSupported: boolean;
  imgFormat: string;
  currentYear = moment().format('YYYY');

  footerLinks = [
    {
      name: 'work',
      url: '#',
    },
    {
      name: 'service',
      url: '#',
    },
    {
      name: 'stories',
      url: '#',
    },
    {
      name: 'about',
      url: '#',
    },
    {
      name: 'careers',
      url: '#',
    },
    {
      name: 'contact',
      url: '#',
    }
  ];

  socialMedia = [
    {
      name: 'fb',
      url: '../../../../assets/imgs/icons/icon-fb.png',
      mediaUrl: 'https://www.facebook.com/DeptAgency/'
    },
    {
      name: 'twitter',
      url: '../../../../assets/imgs/icons/icon-twitter.png',
      mediaUrl: 'https://www.facebook.com/DeptAgency/'
    },
    {
      name: 'ig',
      url: '../../../../assets/imgs/icons/icon-instagram.png',
      mediaUrl: 'https://twitter.com/deptagency'
    }
  ];

  constructor(private globals: GlobalsService) { }

  ngOnInit(): void {
    this.globals.getBrowser() === 'Chrome' || this.globals.getBrowser() === 'Firefox' ?
      this.webpSupported = true : this.webpSupported = false;

    if (this.globals.getBrowser() === 'Chrome' || this.globals.getBrowser() === 'Firefox') {
      this.webpSupported = true;
      this.imgFormat = 'webp';
    } else {
      this.webpSupported = false;
      this.imgFormat = 'png';
    }
  }

  scrollTop(): void {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 200); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 16);
  }

}
