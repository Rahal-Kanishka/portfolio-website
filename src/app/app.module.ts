import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TypingAnimationModule } from "angular-typing-animation";
import { CertificationsComponent } from './certifications/certifications.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MatDialogModule } from "@angular/material/dialog";
import { BusPlatformModalComponent } from './portfolio/bus-platform-modal/bus-platform-modal.component';
import { EducationComponent } from './education/education.component';
import { ZeroRiskModalComponent } from './portfolio/zero-risk-modal/zero-risk-modal.component';
import { MapGeneralizationModalComponent } from './portfolio/map-generalization-modal/map-generalization-modal.component';
import { IntellichefModalComponent } from './portfolio/intellichef-modal/intellichef-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    CertificationsComponent,
    ExperienceComponent,
    PortfolioComponent,
    BusPlatformModalComponent,
    EducationComponent,
    ZeroRiskModalComponent,
    MapGeneralizationModalComponent,
    IntellichefModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TypingAnimationModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
