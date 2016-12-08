import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyAnimate01 } from './animate/animate01';
import { MyAnimate02 } from './animate/animate02';
import { MyAnimate03 } from './animate/animate03';
import { MyAnimate04 } from './animate/animate04';
import { MyAnimate05 } from './animate/animate05';

@NgModule({
  declarations: [
    AppComponent,
    MyAnimate01,
    MyAnimate02,
    MyAnimate03,
    MyAnimate04,
    MyAnimate05
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
