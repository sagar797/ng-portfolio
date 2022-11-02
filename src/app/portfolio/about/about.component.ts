import { Component, OnInit } from '@angular/core';
import { SOCIAL_HANDLE_LINKS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  educationData = [];
  contactData = [];
  orbitData = [];

  constructor() {}

  ngOnInit(): void {
    this.getEducationData();
    this.getContactData();
    this.getOrbitData();
  }

  redirectToSocialLink(socialHandle: string) {
    window.open(SOCIAL_HANDLE_LINKS[socialHandle]);
  }

  openEmailLink() {
    window.open('mailto:gupta.sagar797@gmail.com');
  }

  getEducationData() {
    this.educationData = [
      {
        name: 'Bhagwan Parshuram Institute of Technology',
        standard: 'B.Tech, Electronics & Communication Engineering',
        timeline: {
          from: 2017,
          to: 2021,
        },
        score: {
          name: 'CPGA',
          value: 8.1,
          total: 10,
        },
        css_class: 'bpit',
      },
      {
        name: 'Greenfields Public School',
        standard: 'CBSE Class XII (PCM)',
        timeline: {
          from: 2016,
          to: 2017,
        },
        score: {
          name: 'Precentage',
          value: '89%',
          total: '',
        },
        css_class: 'twelfth',
      },
    ];
  }

  getContactData() {
    this.contactData = [
      {
        name: 'instagram',
        image_path: '../../../assets/images/social-media/instagram.png',
      },
      {
        name: 'twitter',
        image_path: '../../../assets/images/social-media/twitter.png',
      },
      {
        name: 'linkedin',
        image_path: '../../../assets/images/social-media/linkedin.png',
      },
      {
        name: 'medium',
        image_path: '../../../assets/images/social-media/medium.png',
      },
    ];
  }

  getOrbitData() {
    this.orbitData = [
      {
        ring_class: 'ring-0',
        icon_data: [
          {
            name: 'angular',
            image_path: '../../../assets/images/skills/angular.png',
          },
          {
            name: 'aws',
            image_path: '../../../assets/images/skills/aws.png',
          },
          {
            name: 'bootstrap',
            image_path: '../../../assets/images/skills/bootstrap.png',
          },
          {
            name: 'commandline',
            image_path: '../../../assets/images/skills/commandline.png',
          },
          {
            name: 'typescript',
            image_path: '../../../assets/images/skills/typescript.png',
          },
        ],
      },
      {
        ring_class: 'ring-1',
        icon_data: [
          {
            name: 'css',
            image_path: '../../../assets/images/skills/css.png',
          },
          {
            name: 'docker',
            image_path: '../../../assets/images/skills/docker.png',
          },
          {
            name: 'dynamo',
            image_path: '../../../assets/images/skills/dynamo.png',
          },
          {
            name: 's3',
            image_path: '../../../assets/images/skills/s3.png',
          },
          {
            name: 'sass',
            image_path: '../../../assets/images/skills/sass.png',
          },
        ],
      },
      {
        ring_class: 'ring-2',
        icon_data: [
          {
            name: 'elastic',
            image_path: '../../../assets/images/skills/elastic.png',
          },
          {
            name: 'flask',
            image_path: '../../../assets/images/skills/flask.png',
          },
          {
            name: 'git',
            image_path: '../../../assets/images/skills/git.png',
          },
          {
            name: 'commandline',
            image_path: '../../../assets/images/skills/commandline.png',
          },
          {
            name: 'github',
            image_path: '../../../assets/images/skills/github.png',
          },
          {
            name: 'html',
            image_path: '../../../assets/images/skills/html.png',
          },
          {
            name: 'java',
            image_path: '../../../assets/images/skills/java.png',
          },
          {
            name: 'javascript',
            image_path: '../../../assets/images/skills/javascript.png',
          },
        ],
      },
      {
        ring_class: 'ring-3',
        icon_data: [
          {
            name: 'lambda',
            image_path: '../../../assets/images/skills/lambda.png',
          },
          {
            name: 'python',
            image_path: '../../../assets/images/skills/python.png',
          },
          {
            name: 'redis',
            image_path: '../../../assets/images/skills/redis.png',
          },
          {
            name: 'vscode',
            image_path: '../../../assets/images/skills/vscode.png',
          },
        ],
      },
    ];
  }
}
