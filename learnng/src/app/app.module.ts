import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZonetestComponent } from './components/zonetest/zonetest.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GuessnumComponent } from './components/guessnum/guessnum.component';
import { SlotsComponent } from './components/slots/slots.component';
import { InfocardComponent } from './components/slots/infocard/infocard.component';
import { CombineObservablesComponent } from './components/combine-observables/combine-observables.component';
import { HandleExceptionsComponent } from './components/handle-exceptions/handle-exceptions.component';
import { FptsComponent } from './components/fpts/fpts.component';
import { ImgHookComponent } from './components/img-hook/img-hook.component';
import { ForceclassComponent } from './components/forceclass/forceclass.component';
import { MoreObservablesComponent } from './components/more-observables/more-observables.component';

import { Person, PersonService } from './services/person.service';
import { JsonserComponent } from './components/jsonser/jsonser.component';

class MyErrorHandler implements ErrorHandler {
  handleError(error: any) {
    console.error('WE HAVE ERROR! ', error);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GuessnumComponent,
    SlotsComponent,
    InfocardComponent,
    CombineObservablesComponent,
    HandleExceptionsComponent,
    FptsComponent,
    ImgHookComponent,
    ForceclassComponent,
    MoreObservablesComponent,
    ZonetestComponent,
    JsonserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
