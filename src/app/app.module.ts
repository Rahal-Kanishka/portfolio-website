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
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/translations/i18n/', '.json');
}

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
    MatDialogModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
