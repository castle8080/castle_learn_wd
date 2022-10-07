import { Component, OnInit } from '@angular/core';
import * as rx from 'rxjs';
import { Person, PersonService } from '../../services/person.service'; 

@Component({
    selector: 'app-more-observables',
    templateUrl: './more-observables.component.html',
    styleUrls: ['./more-observables.component.scss']
})
export class MoreObservablesComponent implements OnInit {

    public currentPerson$: rx.Observable<Person|null>;
    public currentPersonName$: rx.Observable<string>;

    constructor(private personService: PersonService) {
      this.currentPerson$ = personService.observe();

      this.currentPerson$.subscribe(this.onNewPerson.bind(this));

      // If I don't add this the UI doesn't update at all.
      //this.currentPerson$.subscribe(p => { cd.detectChanges() });

      this.currentPersonName$ = this.currentPerson$.pipe(
        rx.filter(p => p != null),
        rx.map(p => p as Person),
        rx.map(p => p.name),
        rx.distinctUntilChanged()
      );
    }

    ngOnInit(): void {
      console.log("currentPerson", (this.currentPerson$ as any).observers.length);
    }

    private onNewPerson(p: Person|null) {
      console.log("New Person in zone: ", (window as any)["Zone"].current.name, p);
    }
}
