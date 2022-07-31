import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuessnumComponent } from './components/guessnum/guessnum.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: 'guessnum', component: GuessnumComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '',   redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
