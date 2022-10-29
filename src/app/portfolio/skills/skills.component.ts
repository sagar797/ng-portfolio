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
        name: 'DSA',
        progress: 75,
        class: 'fas fa-code',
        image: false,
      },
      {
        name: 'Angular',
        progress: 50,
        class: 'angular',
        path: '../../../assets/images/skills/angular.png',
        image: true,
      },
      {
        name: 'HTML',
        progress: 75,
        class: 'html',
        path: '../../../assets/images/skills/html.png',
        image: true,
      },
      {
        name: 'CSS',
        progress: 50,
        class: 'css',
        path: '../../../assets/images/skills/css.png',
        image: true,
      },
      {
        name: 'Javascript',
        progress: 75,
        class: 'javascript',
        path: '../../../assets/images/skills/javascript.png',
        image: true,
      },
      {
        name: 'Typescript',
        progress: 50,
        class: 'typescript',
        path: '../../../assets/images/skills/typescript.png',
        image: true,
      },
      {
        name: 'Python',
        progress: 75,
        class: 'python',
        path: '../../../assets/images/skills/python.png',
        image: true,
      },
      {
        name: 'Flask',
        progress: 50,
        class: 'flask',
        path: '../../../assets/images/skills/flask.png',
        image: true,
      },
      {
        name: 'Java',
        progress: 50,
        class: 'java',
        path: '../../../assets/images/skills/java.png',
        image: true,
      },
      {
        name: 'Git',
        progress: 50,
        class: 'git',
        path: '../../../assets/images/skills/git.png',
        image: true,
      },
      {
        name: 'AWS',
        progress: 75,
        class: 'aws',
        path: '../../../assets/images/skills/aws.png',
        image: true,
      },
      {
        name: 'Redis',
        progress: 75,
        class: 'redis',
        path: '../../../assets/images/skills/redis.png',
        image: true,
      },
      {
        name: 'AWS Dynamo DB',
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
        name: 'AWS Elastic Search',
        progress: 50,
        class: 'elastic-search',
        path: '../../../assets/images/skills/elastic.png',
        image: true,
      },
      {
        name: 'AWS S3',
        progress: 50,
        class: 's3',
        path: '../../../assets/images/skills/s3.png',
        image: true,
      },
      // {
      //   name: 'Docker',
      //   progress: 50,
      //   class: 'docker',
      //   path: '../../../assets/images/skills/docker.png',
      //   image: true,
      // },
      // {
      //   name: 'Kubernetes',
      //   progress: 50,
      //   class: 'kubernetes',
      //   path: '../../../assets/images/skills/kubernetes.png',
      //   image: true,
      // },
    ];
  }
}
