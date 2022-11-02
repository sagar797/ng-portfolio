import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isLoading: boolean = false;
  loadingTime: number = 0;
  loaderTime: number = 3000;

  constructor() {}

  ngOnInit(): void {
    this.isLoading = true;
    this.loadingTime = this.loaderTime;
    setTimeout(() => {
      this.isLoading = false;
    }, this.loaderTime);
    setInterval(() => {
      this.loadingTime -= 1000;
    }, 1000);
  }
}
