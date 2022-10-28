import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  colors = ['#f5a147', '#51cad8', '#112b39'];
  numLines = 3;
  currCount;
  texts;
  blobs;

  constructor() {}

  ngOnInit(): void {
    this.initializeVariables();
    this.colorBlobs();
  }

  initializeVariables() {
    this.currCount = this.numLines;
    this.texts = document.querySelectorAll('#textClip text');
    this.blobs = document.querySelectorAll('#background path');
  }

  colorBlobs() {
    this.blobs.forEach((blob) => {
      blob['style'].fill =
        this.colors[Math.floor(Math.random() * this.colors.length)];
    });
  }

  @HostListener('window:animationiteration', ['$event'])
  nextIteration() {
    // Change the color of all the blobs
    this.colorBlobs();

    // Hide the old set of lines
    let startVal = this.currCount - this.numLines;
    if (startVal < 0) {
      startVal = this.texts.length - this.numLines;
    }
    for (let i = startVal; i < startVal + this.numLines; i++) {
      this.texts[i]['style'].display = 'none';
    }
    // Show new set of lines
    for (let j = this.currCount; j < this.currCount + this.numLines; j++) {
      this.texts[j]['style'].display = 'inline';
    }
    this.currCount += this.numLines;
    if (this.currCount >= this.texts.length) {
      this.currCount = 0;
    }
  }
}
