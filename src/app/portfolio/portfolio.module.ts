import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { NgParticlesModule } from 'ng-particles';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SkillsComponent } from './skills/skills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    LayoutComponent,
    SkillsComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    NgParticlesModule,
    NgxTypedJsModule,
    FontAwesomeModule,
  ],
})
export class PortfolioModule {}
