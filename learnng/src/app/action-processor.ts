import { ReplaySubject, Observable, scan } from "rxjs";

export class ActionProcessor<S, A> {

    readonly actions$ = new ReplaySubject<A>(1);
    readonly state$: Observable<S>;
    private _last: S;
  
    constructor(readonly actionHandler: (s: S, a: A) => S, readonly initial: S) {
      this._last = initial;
      this.state$ = this.actions$.pipe(
        scan(actionHandler, initial)
      );
      this.state$.subscribe(s => this._last = s);
    }
  
    apply(action: A) {
      this.actions$.next(action);
    }
  
    last() {
      return this._last;
    }
  }
  
  export abstract class BaseActionProcessor<S, A> extends ActionProcessor<S, A> {
  
    constructor(initial: S) {
      super((s, a) => this.process(s, a), initial);
    }
  
    abstract process(s: S, a: A): S;
  }
  
  export class CallbackActionProcessor<S> extends BaseActionProcessor<S, (s: S) => S> {
    constructor(initial: S) {
      super(initial);
    }
  
    process(s: S, f: (old: S) => S): S {
      return f(s);
    }
  }