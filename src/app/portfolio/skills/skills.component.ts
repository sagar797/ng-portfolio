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
        name: 'Data Structure & Algorithms',
        progress: 75,
        class: 'fas fa-code',
        image: false,
      },
      {
        name: 'Angular',
        progress: 50,
        class: 'fab fa-angular',
        image: false,
      },
      {
        name: 'HTML',
        progress: 75,
        class: 'fa fa-html5',
        image: false,
      },
      {
        name: 'CSS',
        progress: 50,
        class: 'fa fa-css3',
        image: false,
      },
      {
        name: 'Javascript',
        progress: 75,
        class: 'fab fa-js',
        image: false,
      },
      {
        name: 'Python',
        progress: 75,
        class: 'fab fa-python',
        image: false,
      },
      {
        name: 'Flask',
        progress: 50,
        class: 'fas fa-pepper-hot',
        image: false,
      },
      {
        name: 'AWS',
        progress: 75,
        class: 'aws',
        path: '../../../assets/images/skills/aws.png',
        image: true,
      },
      {
        name: 'Dynamo DB',
        progress: 50,
        class: 'dynamo',
        path: '../../../assets/images/skills/dynamo.png',
        image: true,
      },
      {
        name: 'AWS Lambda',
        progress: 50,
        class: 'lambda',
        path: '../../../assets/images/skills/lambda.png',
        image: true,
      },
      {
        name: 'Dynamo DB',
        progress: 50,
        class: 'fas fa-database',
        image: false,
      },
      {
        name: 'Dynamo DB',
        progress: 50,
        class: 'fas fa-database',
        image: false,
      },
      {
        name: 'Dynamo DB',
        progress: 50,
        class: 'fas fa-database',
        image: false,
      },
    ];
  }
}
