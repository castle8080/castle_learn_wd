import { Directive, OnDestroy } from "@angular/core";
import { Subject, Observable, takeUntil, Subscription } from "rxjs";

@Directive()
export abstract class BaseComponent implements OnDestroy {

    private _destroy$ = new Subject<void>();

    managed<T>(observable: Observable<T>): Observable<T> {
        return observable.pipe(takeUntil(this._destroy$));
    }

    subscribe<T>(observable: Observable<T>, next: (value: T) => void): Subscription {
        return this.managed(observable).subscribe(next);
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }
}