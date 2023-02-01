import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroineComponent } from './components/heroine/heroine.component';
import { ComedyfilmsComponent } from './components/comedyfilms/comedyfilms.component';
import { TerrorfilmsComponent } from './components/terrorfilms/terrorfilms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroineComponent,
    ComedyfilmsComponent,
    TerrorfilmsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
