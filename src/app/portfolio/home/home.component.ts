import { Component, OnInit } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Engine,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { SOCIAL_HANDLE_LINKS } from '../../constants/app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  id = 'tsparticles';
  particlesOptions = {};
  mySummaryData: Array<String> = [];

  constructor() {}

  ngOnInit(): void {
    this.getParticlesOptions();
    this.getMySummaryData();
  }

  getParticlesOptions() {
    this.particlesOptions = {
      background: {
        color: {
          value: 'black',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: ClickMode.push,
          },
          onHover: {
            enable: true,
            mode: HoverMode.repulse,
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.bounce,
          },
          random: false,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
          // To Know More Shapes(SAGAR) : https://github.com/matteobruni/tsparticles/tree/main/shapes
        },
        size: {
          value: { min: 1, max: 1.5 },
        },
      },
      detectRetina: true,
      preset: ['bubbles', 'stars'],
    };
    // To Know More Options(SAGAR): https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }

  getMySummaryData() {
    this.mySummaryData = [
      'Full-Stack Developer.',
      'Problem Solver.',
      'Gaming Enthusiast.',
      // 'Cinephile.',
    ];
  }

  redirectToSocialLink(socialHandle: string) {
    window.open(SOCIAL_HANDLE_LINKS[socialHandle]);
  }
}
