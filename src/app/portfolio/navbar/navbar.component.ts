import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToHomePage() {
    this.router.navigate(['']);
  }

  redirectToResume() {
    window.open(
      'https://docs.google.com/document/d/15fXS2xZu0JwI5XEeWEq8a-P94FQWz0QmAjjlwZi7o1Y/edit'
    );
  }
}
