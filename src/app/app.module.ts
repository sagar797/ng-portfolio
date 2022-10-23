import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PortfolioModule } from './portfolio/portfolio.module';

@NgModule({
  declarations: [AppComponent, PagenotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, PortfolioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
