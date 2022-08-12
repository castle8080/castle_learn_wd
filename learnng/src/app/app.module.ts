import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GuessnumComponent } from './components/guessnum/guessnum.component';
import { SlotsComponent } from './components/slots/slots.component';
import { InfocardComponent } from './components/slots/infocard/infocard.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GuessnumComponent,
    SlotsComponent,
    InfocardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
