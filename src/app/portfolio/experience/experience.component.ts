import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  SCREEN_WIDTH;
  SCREEN_HEIGHT;

  RADIUS;
  RADIUS_SCALE;
  RADIUS_SCALE_MIN;
  RADIUS_SCALE_MAX;
  QUANTITY;

  canvas;
  context;
  particles;

  mouseX;
  mouseY;
  mouseIsDown;

  constructor() {}

  ngOnInit(): void {
    this.initializeVariables();
    this.init();
  }

  initializeVariables() {
    this.SCREEN_WIDTH = window.innerWidth;
    this.SCREEN_HEIGHT = window.innerHeight;

    this.RADIUS = 70;
    this.RADIUS_SCALE = 1;
    this.RADIUS_SCALE_MIN = 1;
    this.RADIUS_SCALE_MAX = 1.5;
    this.QUANTITY = 25;

    this.canvas;
    this.context;
    this.particles;

    this.mouseX = this.SCREEN_WIDTH * 0.5;
    this.mouseY = this.SCREEN_HEIGHT * 0.5;

    this.mouseIsDown = false;
  }

  init() {
    this.canvas = document.getElementById('world');

    if (this.canvas && this.canvas.getContext) {
      this.context = this.canvas.getContext('2d');
      this.createParticles();
      this.windowResizeHandler();
      setInterval(() => this.loop(), 1000 / 60);
    }
  }

  createParticles() {
    this.particles = [];

    for (var i = 0; i < this.QUANTITY; i++) {
      var particle = {
        size: 1,
        position: { x: this.mouseX, y: this.mouseY },
        offset: { x: 0, y: 0 },
        shift: { x: this.mouseX, y: this.mouseY },
        speed: 0.01 + Math.random() * 0.04,
        targetSize: 1,
        fillColor:
          '#' + ((Math.random() * 0x404040 + 0xaaaaaa) | 0).toString(16),
        orbit: this.RADIUS * 0.5 + this.RADIUS * 0.5 * Math.random(),
      };

      this.particles.push(particle);
    }
  }

  @HostListener('window:mousemove', ['$event'])
  documentMouseMoveHandler(event) {
    console.log('mousemove', this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
    this.mouseX =
      event['clientX'] - (window.innerWidth - this.SCREEN_WIDTH) * 0.5;
    this.mouseY =
      event['clientY'] - (window.innerHeight - this.SCREEN_HEIGHT) * 0.5;
  }

  @HostListener('window:mousedown', ['$event'])
  documentMouseDownHandler(event) {
    console.log('mousedown');
    this.mouseIsDown = true;
  }

  @HostListener('window:mouseup', ['$event'])
  documentMouseUpHandler(event) {
    console.log('mouseup');
    this.mouseIsDown = false;
  }

  @HostListener('window:touchstart', ['$event'])
  documentTouchStartHandler(event) {
    console.log('touchstart');
    if (event.touches.length == 1) {
      event.preventDefault();

      this.mouseX =
        event.touches[0].pageX - (window.innerWidth - this.SCREEN_WIDTH) * 0.5;
      this.mouseY =
        event.touches[0].pageY -
        (window.innerHeight - this.SCREEN_HEIGHT) * 0.5;
    }
  }

  @HostListener('window:touchmove', ['$event'])
  documentTouchMoveHandler(event) {
    console.log('touchmove');
    if (event.touches.length == 1) {
      event.preventDefault();

      this.mouseX =
        event.touches[0].pageX - (window.innerWidth - this.SCREEN_WIDTH) * 0.5;
      this.mouseY =
        event.touches[0].pageY -
        (window.innerHeight - this.SCREEN_HEIGHT) * 0.5;
    }
  }

  @HostListener('window:resize', ['$event'])
  windowResizeHandler() {
    console.log('resize');
    this.SCREEN_WIDTH = window.innerWidth;
    this.SCREEN_HEIGHT = window.innerHeight;

    this.canvas.width = this.SCREEN_WIDTH;
    this.canvas.height = this.SCREEN_HEIGHT;
  }

  loop() {
    if (this.mouseIsDown) {
      this.RADIUS_SCALE += (this.RADIUS_SCALE_MAX - this.RADIUS_SCALE) * 0.02;
    } else {
      this.RADIUS_SCALE -= (this.RADIUS_SCALE - this.RADIUS_SCALE_MIN) * 0.02;
    }

    this.RADIUS_SCALE = Math.min(this.RADIUS_SCALE, this.RADIUS_SCALE_MAX);

    this.context.fillStyle = 'rgba(0,0,0,0.05)';
    this.context.fillRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );

    for (let i = 0, len = this.particles.length; i < len; i++) {
      var particle = this.particles[i];

      var lp = { x: particle.position.x, y: particle.position.y };

      // Rotation
      particle.offset.x += particle.speed;
      particle.offset.y += particle.speed;

      // Follow mouse with some lag
      particle.shift.x += (this.mouseX - particle.shift.x) * particle.speed;
      particle.shift.y += (this.mouseY - particle.shift.y) * particle.speed;

      console.log(this.mouseX, particle.shift.x);
      console.log(this.mouseY, particle.shift.y);

      // Apply position
      particle.position.x =
        particle.shift.x +
        Math.cos(i + particle.offset.x) * (particle.orbit * this.RADIUS_SCALE);
      particle.position.y =
        particle.shift.y +
        Math.sin(i + particle.offset.y) * (particle.orbit * this.RADIUS_SCALE);

      // Limit to screen bounds
      particle.position.x = Math.max(
        Math.min(particle.position.x - 340, this.SCREEN_WIDTH),
        0
      );
      particle.position.y = Math.max(
        Math.min(particle.position.y - 140, this.SCREEN_HEIGHT),
        0
      );

      particle.size += (particle.targetSize - particle.size) * 0.05;

      if (Math.round(particle.size) == Math.round(particle.targetSize)) {
        particle.targetSize = 1 + Math.random() * 7;
      }

      this.context.beginPath();
      this.context.fillStyle = particle.fillColor;
      this.context.strokeStyle = particle.fillColor;
      this.context.lineWidth = particle.size;
      this.context.moveTo(lp.x, lp.y);
      this.context.lineTo(particle.position.x, particle.position.y);
      this.context.stroke();
      this.context.arc(
        particle.position.x,
        particle.position.y,
        particle.size / 2,
        0,
        Math.PI * 2,
        true
      );
      this.context.fill();
    }
  }
}
