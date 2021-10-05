import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects: Array<Project>;

  constructor() {
    this.projects = [
      new Project(
        'Enigma.PNG',
        'https://www.enigmaagency.co',
        'Enigma-Agency-1'
      ),
      new Project(
        'arcane-island-43141.herokuapp.com_.png',
        'https://arcane-island-43141.herokuapp.com/',
        'djangoProject'
      ),
      new Project(
        'Vue-API.PNG',
        'AAG-Front-end-Developer-Test',
        'AAG-Front-end-Developer-Test'
      ),
      new Project(
        'buyboatsAPI.png',
        'https://www.buyboatsus.com/used-boats',
        'Boats'
      ),
      new Project('HyWyre.PNG', 'HyWyre-i.t/', 'Enigma-Agency-1', 'current'),
      new Project('Elite_Bodies.png', 'Elitebodies', 'Elitebodies', 'current'),
      new Project(
        'Next_Investments.png',
        'Beginner-Project',
        'Beginner-Project',
        'current'
      ),
      new Project(
        'My_Emojis.png',
        'personal_emojis',
        'Scrimba/tree/master/personal_emojis',
        'app'
      ),
      new Project(
        'My_Personal_Diary_JS.png',
        'building_a_diary_app',
        'Scrimba/tree/master/building_a_diary_app',
        'app'
      ),
      new Project(
        'To_Buy_List.png',
        'To-buy-List',
        'Scrimba/tree/master/personal_emojis',
        'app'
      ),
    ];
  }

  ngOnInit(): void {}
}

class Project {
  img: string;
  demo: string;
  github: string;
  filter: string;

  constructor(img: string, demo: string, github: string, filter = 'web') {
    this.img = './assets/img/' + img;

    this.github = 'https://github.com/ianjosephjones/' + github;
    if (demo.includes('www.') || demo.includes('herokuapp')) {
      this.demo = demo;
    } else {
      this.demo = 'https://ianjosephjones.github.io/' + demo;
    }

    this.filter = 'filter-' + filter;
  }
}
