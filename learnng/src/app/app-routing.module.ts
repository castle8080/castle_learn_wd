import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuessnumComponent } from './components/guessnum/guessnum.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SlotsComponent } from './components/slots/slots.component';
import { CombineObservablesComponent } from './components/combine-observables/combine-observables.component';
import { HandleExceptionsComponent } from './components/handle-exceptions/handle-exceptions.component';

const routes: Routes = [
  { path: 'guessnum', component: GuessnumComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'slots', component: SlotsComponent },
  { path: 'combine_observables', component: CombineObservablesComponent },
  { path: 'handle_exceptions', component: HandleExceptionsComponent },
  { path: '',   redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
