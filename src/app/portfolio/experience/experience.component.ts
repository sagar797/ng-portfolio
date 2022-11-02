import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences = [];

  constructor() {}

  ngOnInit(): void {
    this.getAllExperiences();
  }

  getAllExperiences() {
    this.experiences = [
      {
        role: 'Full-Stack Developer',
        company: {
          name: 'Delhivery',
          logo: '../../../assets/images/delhivery.png',
        },
        timeline: {
          from: 'April 2021',
          to: 'Present',
        },
        information: [
          'Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.',
          'Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.',
          'Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.',
        ],
      },
      {
        role: 'Full-Stack Developer',
        company: {
          name: 'Delhivery',
          logo: '../../../assets/images/delhivery.png',
        },
        timeline: {
          from: 'April 2021',
          to: 'Present',
        },
        information: [
          'Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.',
          'Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.',
          'Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.',
        ],
      },
      {
        role: 'Full-Stack Developer',
        company: {
          name: 'Delhivery',
          logo: '../../../assets/images/delhivery.png',
        },
        timeline: {
          from: 'April 2021',
          to: 'Present',
        },
        information: [
          'Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.',
          'Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.',
          'Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.',
        ],
      },
      {
        role: 'Full-Stack Developer',
        company: {
          name: 'Delhivery',
          logo: '../../../assets/images/delhivery.png',
        },
        timeline: {
          from: 'April 2021',
          to: 'Present',
        },
        information: [
          'Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.',
          'Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.',
          'Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.',
        ],
      },
    ];
  }
}
