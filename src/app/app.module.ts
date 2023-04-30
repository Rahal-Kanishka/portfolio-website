import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TypingAnimationModule } from "angular-typing-animation";

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TypingAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
