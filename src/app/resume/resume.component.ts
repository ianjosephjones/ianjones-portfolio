import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  resumeItems: Array<ResumeItem>;
  summary: Summary;
  constructor() {
    var Enigma = new ResumeItem(
      'Full Stack Enigneer',
      '2021 - Present',
      'Enigma Angency, North Carolina'
    );
    Enigma.description = [
      ' Writing responsive websites using programming languages such as HTML, CSS JavaScript & Bootstrap',
      'Incorporating api layers to handle contact forms with two sided email responses',
      'Azure api hosting services and Azure static site hosting',
      'Deploy environment variables using Azure',
    ];
    var Owner = new ResumeItem(
      'OWNER/OPERATOR OF IAN JOSEPH JONES PHOTOGRAPHY LLC',
      '2013 - Present',
      'Wedding Photography'
    );
    Owner.description = [
      'Responsible for all book-keeping, scheduling, and maintain all customer accounts along with monitoring daily business operations',
      'Currently managing a successful website to showcase my current work & helpful information for potential clients',
      'Implementing design and SEO to my website attract more customers as well as maintaining a proper Google ranking',
    ];

    this.resumeItems = [Enigma, Owner];

    this.summary = new Summary(
      'West Palm Beach, FL',
      '(561) 313-6648',
      'ianjosephjones@gmail.com'
    );
  }

  ngOnInit(): void {}
}

class ResumeItem {
  title: string;
  year: string;
  company: string;
  description: Array<string> = [];

  constructor(title: string, year: string, company: string) {
    this.title = title;
    this.company = company;
    this.year = year;
  }
}

class Summary {
  address: string;
  phone: string;
  email: string;

  constructor(addr: string, ph: string, em: string) {
    this.address = addr;
    this.phone = ph;
    this.email = em;
  }
}
