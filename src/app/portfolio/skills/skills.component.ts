import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  frontendSkills = [];
  backendSkills = [];
  otherSkills = [];

  constructor() {}

  ngOnInit(): void {
    this.getFrontendSkills();
    this.getBackendSkills();
    this.getOtherSkills();
  }

  getFrontendSkills() {
    this.frontendSkills = [
      {
        name: 'HTML',
        class: 'html',
        path: '../../../assets/images/skills/html.png',
        image: true,
      },
      {
        name: 'CSS',
        class: 'css',
        path: '../../../assets/images/skills/css.png',
        image: true,
      },
      {
        name: 'Sass',
        class: 'sass',
        path: '../../../assets/images/skills/sass.png',
        image: true,
      },
      {
        name: 'Bootstrap',
        class: 'bootstrap',
        path: '../../../assets/images/skills/bootstrap.png',
        image: true,
      },
      {
        name: 'Javascript',
        class: 'javascript',
        path: '../../../assets/images/skills/javascript.png',
        image: true,
      },
      {
        name: 'Typescript',
        class: 'typescript',
        path: '../../../assets/images/skills/typescript.png',
        image: true,
      },
      {
        name: 'Angular',
        class: 'angular',
        path: '../../../assets/images/skills/angular.png',
        image: true,
      },
    ];
  }

  getBackendSkills() {
    this.backendSkills = [
      {
        name: 'Python',
        class: 'python',
        path: '../../../assets/images/skills/python.png',
        image: true,
      },
      {
        name: 'Flask',
        class: 'flask',
        path: '../../../assets/images/skills/flask.png',
        image: true,
      },
      {
        name: 'AWS',
        class: 'aws',
        path: '../../../assets/images/skills/aws.png',
        image: true,
      },
      {
        name: 'Redis',
        class: 'redis',
        path: '../../../assets/images/skills/redis.png',
        image: true,
      },
      {
        name: 'Dynamo DB',
        class: 'dynamo',
        path: '../../../assets/images/skills/dynamo.png',
        image: true,
      },
      {
        name: 'Lambda',
        class: 'lambda',
        path: '../../../assets/images/skills/lambda.png',
        image: true,
      },
      {
        name: 'Elastic Search',
        class: 'elastic-search',
        path: '../../../assets/images/skills/elastic.png',
        image: true,
      },
      {
        name: 'S3',
        class: 's3',
        path: '../../../assets/images/skills/s3.png',
        image: true,
      },
      // {
      //   name: 'Docker',
      //   class: 'docker',
      //   path: '../../../assets/images/skills/docker.png',
      //   image: true,
      // },
      // {
      //   name: 'Kubernetes',
      //   class: 'kubernetes',
      //   path: '../../../assets/images/skills/kubernetes.png',
      //   image: true,
      // },
    ];
  }

  getOtherSkills() {
    this.otherSkills = [
      {
        name: 'Java',
        class: 'java',
        path: '../../../assets/images/skills/java.png',
        image: true,
      },
      {
        name: 'DSA',
        class: 'fas fa-code',
        image: false,
      },
      {
        name: 'Command Line',
        class: 'commandline',
        path: '../../../assets/images/skills/commandline.png',
        image: true,
      },
      {
        name: 'Vs Code',
        class: 'vscode',
        path: '../../../assets/images/skills/vscode.png',
        image: true,
      },
      {
        name: 'Git',
        class: 'git',
        path: '../../../assets/images/skills/git.png',
        image: true,
      },
      {
        name: 'Github',
        class: 'github',
        path: '../../../assets/images/skills/github.png',
        image: true,
      },
    ];
  }
}
