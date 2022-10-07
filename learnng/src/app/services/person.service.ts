import { Injectable } from '@angular/core';

import * as rx from 'rxjs';

export class Person {

    constructor(
        public name: string,
        public age: number,
        public favoriteThings: string[]
    ) {}

}

const FIRST_NAMES = [
    "Liam",
    "Olivia",
    "Noah",
    "Emma",
    "Charlotte",
    "Oliver",
    "Amelia",
    "Elijah",
    "William",
    "James",
    "Sophia",
    "Benjamin",
    "Ava",
    "Isabella",
    "Mia",
    "Henry",
    "Evelyn",
    "Lucas",
    "Alexander",
    "Luna",
];

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    private currentPerson$ = new rx.BehaviorSubject<Person|null>(null);

    constructor() {
        this.startPersonInfoFeed();
        console.log("Creating person service: ", this);
    }

    getCurrent(): Person|null {
      return this.currentPerson$.value;
    }

    observe(): rx.Observable<Person|null> {
      return this.currentPerson$;
    }

    update(p: Person) {
      this.currentPerson$.next(p);
    }

    static newRandom() {
      return new Person(
        FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)],
        Math.floor((Math.random() * 30) + 18),
        []
      );
    }

    static age1Year(p: Person): Person {
      return new Person(p.name, p.age + 1, p.favoriteThings);
    }

    startPersonInfoFeed() {
      // Change to a new person every 5 seconds
      rx.interval(5000).subscribe(t => {
        this.update(PersonService.newRandom());
      });
      

      // Update person to change age every second.
      rx.interval(1000).subscribe(t => {
        let p = this.getCurrent();
        if (p != null) {
          this.update(PersonService.age1Year(p));
        }
      });
    }
}