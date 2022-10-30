import { Component, OnInit } from '@angular/core';
import { SOCIAL_HANDLE_LINKS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  redirectToSocialLink(socialHandle: string) {
    window.open(SOCIAL_HANDLE_LINKS[socialHandle]);
  }
}
