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

  constructor() {}

  ngOnInit(): void {
    this.getEducationData();
    this.getContactData();
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
}
