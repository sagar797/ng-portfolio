import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [];

  constructor() {}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills() {
    this.skills = [
      {
        name: 'HTML',
        progress: 75,
        class: 'fa fa-html5',
      },
      {
        name: 'CSS',
        progress: 50,
        class: 'fa fa-css3',
      },
      {
        name: 'Javascript',
        progress: 75,
        class: 'fa-brands fa-angular',
      },
      {
        name: 'CSS',
        progress: 50,
        class: 'fa fa-html5',
      },
      {
        name: 'HTML',
        progress: 75,
        class: 'fa fa-html5',
      },
      {
        name: 'CSS',
        progress: 50,
        class: 'fa fa-html5',
      },
      {
        name: 'HTML',
        progress: 75,
        class: 'fa fa-html5',
      },
      {
        name: 'CSS',
        progress: 50,
        class: 'fa fa-html5',
      },
      {
        name: 'HTML',
        progress: 75,
        class: 'fa fa-html5',
      },
      {
        name: 'CSS',
        progress: 50,
        class: 'fa fa-html5',
      },
    ];
  }
}
