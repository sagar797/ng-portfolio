import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [];

  constructor() {}

  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList() {
    this.projects = [
      {
        name: 'Master TODO List',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consectetur? Blanditiis quos voluptatem quas sequi deleniti, amet, nam voluptatibus, impedit alias soluta similique atque maiores sunt delectus a.',
        tech_used: [
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/vscode.png',
          },
          {
            name: 'Sublime Text',
            img_link: '../../../assets/images/skills/aws.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/angular.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/docker.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/elastic.png',
          },
        ],
        image: '../../../assets/images/projects/todo-laptop.png',
        githubLink: 'https://github.com/sagar797/flask-todo',
        hostedLink: 'http://sagar-todo-app.herokuapp.com/',
      },
      {
        name: 'Master TODO List',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consectetur? Blanditiis quos voluptatem quas sequi deleniti, amet, nam voluptatibus, impedit alias soluta similique atque maiores sunt delectus a.',
        tech_used: [
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/vscode.png',
          },
          {
            name: 'Sublime Text',
            img_link: '../../../assets/images/skills/aws.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/angular.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/docker.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/elastic.png',
          },
        ],
        image: '../../../assets/images/projects/todo-laptop.png',
        githubLink: 'https://github.com/sagar797/flask-todo',
        hostedLink: 'http://sagar-todo-app.herokuapp.com/',
      },
      {
        name: 'Master TODO List',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consectetur? Blanditiis quos voluptatem quas sequi deleniti, amet, nam voluptatibus, impedit alias soluta similique atque maiores sunt delectus a.',
        tech_used: [
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/vscode.png',
          },
          {
            name: 'Sublime Text',
            img_link: '../../../assets/images/skills/aws.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/angular.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/docker.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/elastic.png',
          },
        ],
        image: '../../../assets/images/projects/todo-laptop.png',
        githubLink: 'https://github.com/sagar797/flask-todo',
        hostedLink: 'http://sagar-todo-app.herokuapp.com/',
      },
      {
        name: 'Master TODO List',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consectetur? Blanditiis quos voluptatem quas sequi deleniti, amet, nam voluptatibus, impedit alias soluta similique atque maiores sunt delectus a.',
        tech_used: [
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/vscode.png',
          },
          {
            name: 'Sublime Text',
            img_link: '../../../assets/images/skills/aws.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/angular.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/docker.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/elastic.png',
          },
        ],
        image: '../../../assets/images/projects/todo-laptop.png',
        githubLink: 'https://github.com/sagar797/flask-todo',
        hostedLink: 'http://sagar-todo-app.herokuapp.com/',
      },
      {
        name: 'Master TODO List',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consectetur? Blanditiis quos voluptatem quas sequi deleniti, amet, nam voluptatibus, impedit alias soluta similique atque maiores sunt delectus a.',
        tech_used: [
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/vscode.png',
          },
          {
            name: 'Sublime Text',
            img_link: '../../../assets/images/skills/aws.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/angular.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/docker.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/elastic.png',
          },
        ],
        image: '../../../assets/images/projects/todo-laptop.png',
        githubLink: 'https://github.com/sagar797/flask-todo',
        hostedLink: 'http://sagar-todo-app.herokuapp.com/',
      },
      {
        name: 'Master TODO List',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolor ullam consectetur? Blanditiis quos voluptatem quas sequi deleniti, amet, nam voluptatibus, impedit alias soluta similique atque maiores sunt delectus a.',
        tech_used: [
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/vscode.png',
          },
          {
            name: 'Sublime Text',
            img_link: '../../../assets/images/skills/aws.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/angular.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/docker.png',
          },
          {
            name: 'Vs Code',
            img_link: '../../../assets/images/skills/elastic.png',
          },
        ],
        image: '../../../assets/images/projects/todo-laptop.png',
        githubLink: 'https://github.com/sagar797/flask-todo',
        hostedLink: 'http://sagar-todo-app.herokuapp.com/',
      },
    ];
  }

  redirectToLink(url) {
    window.open(url);
  }
}
