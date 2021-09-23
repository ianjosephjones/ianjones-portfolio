import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Array<Skill>;
  constructor() {
    this.skills = [
      new Skill('Angular', '65'),
      new Skill('HTML', '90'),
      new Skill('CSS', '90'),
      new Skill('Javascript', '75'),
      new Skill('Python', '60'),
      new Skill('Adobe Suite', '80'),
    ];
  }

  ngOnInit(): void {}
}

class Skill {
  name: string;
  value: string;

  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}
