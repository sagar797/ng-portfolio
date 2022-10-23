import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { NgParticlesModule } from 'ng-particles';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    NgParticlesModule,
    NgxTypedJsModule,
  ],
})
export class PortfolioModule {}
