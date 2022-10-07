import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuessnumComponent } from './components/guessnum/guessnum.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SlotsComponent } from './components/slots/slots.component';
import { CombineObservablesComponent } from './components/combine-observables/combine-observables.component';
import { HandleExceptionsComponent } from './components/handle-exceptions/handle-exceptions.component';
import { FptsComponent } from './components/fpts/fpts.component';
import { ImgHookComponent } from './components/img-hook/img-hook.component';
import { ForceclassComponent } from './components/forceclass/forceclass.component';
import { MoreObservablesComponent } from './components/more-observables/more-observables.component';
import { ZonetestComponent } from './components/zonetest/zonetest.component';

const routes: Routes = [
  { path: 'guessnum', component: GuessnumComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'slots', component: SlotsComponent },
  { path: 'combine_observables', component: CombineObservablesComponent },
  { path: 'handle_exceptions', component: HandleExceptionsComponent },
  { path: 'fpts', component: FptsComponent },
  { path: 'imghook', component: ImgHookComponent },
  { path: 'forceclass', component: ForceclassComponent },
  { path: 'more_observables', component: MoreObservablesComponent },
  { path: 'zonetest', component: ZonetestComponent },
  { path: '',   redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
