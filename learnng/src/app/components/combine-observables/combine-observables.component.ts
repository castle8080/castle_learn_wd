import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subscription, combineLatest, map, pipe } from 'rxjs';

@Component({
  selector: 'app-combine-observables',
  templateUrl: './combine-observables.component.html',
  styleUrls: ['./combine-observables.component.scss']
})
export class CombineObservablesComponent implements OnInit {

  message: string = "";

  constructor() {
    let categoryId$ = new ReplaySubject<string>();
    let root$ = new ReplaySubject<number>();

    combineLatest([categoryId$, root$]).subscribe(([categoryId, root]) => {
      this.loadCategory(categoryId, root);
    });

    setInterval(() => { categoryId$.next((Math.floor(Math.random() * 10) + 1).toString()) }, 3000);
    setInterval(() => { root$.next(Math.floor(Math.random() * 100) + 100) }, 2000);
  }

  ngOnInit(): void {
  }

  private loadCategory(categoryId: string, root: number) {
    this.message = `Category: ${categoryId} Root: ${root}`;
  }

}
