import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { BehaviorSubject, Observable, pipe, mergeMap, switchMap, interval, map, onErrorResumeNext, config } from 'rxjs';

// helper to run function after period and give a promise.
function later<T> (f: () => T, delay: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(f());
      }
      catch (e) {
        reject(e);
      }
    }, delay);
  });
}

@Component({
  selector: 'app-handle-exceptions',
  templateUrl: './handle-exceptions.component.html',
  styleUrls: ['./handle-exceptions.component.scss']
})
export class HandleExceptionsComponent {

  templateId$ = interval(1000).pipe(map(i => i + 1));

  constructor() {
      //this.setupCase1();
      //this.setupCase2();
      //this.setupCase3();
      this.setupCase4();
  }

  setupCase1() {    
      // CASE 1: Exception thrown in map.
      //
      // Setup an observable where there is an error in sync mapping.
      // After the code in map throws an exception, this observable will
      // stop firing.
      this.templateId$.pipe(
        map(tid => {
          if ((tid % 3) == 0) {
            throw new Error(`[case 1] tid: ${tid}`);
          }
          return tid;
        })
      )
      .subscribe(tid => console.log(`[case 1] tid! ${tid}`));
  }

  setupCase2() {
      // CASE 2: Exception in subscribe
      //
      // Setup an observable where there is an exception in subscribe.
      // In this case 
      this.templateId$.subscribe(tid =>{
        console.log(`[case 2] tid: ${tid}`);
        if ((tid % 3) == 0) {
          throw new Error(`[case 2] tid: ${tid}`);
        }
      });
  }

  setupCase3() {
      // CASE 3: catch and eat async in subscribe
      //
      // Setup an observable where there is an async operation
      // in subscribe and an exception. The promise has its exception
      // discoarded. We don't see errors make it to central error handling.
      this.templateId$.subscribe((tid) => {
        (async() => {
          let r = await later(() => {
            console.log(`[case 3] tid: ${tid}`);
            if ((tid % 3) == 0) {
              throw new Error(`[case 3] tid: ${tid}`);
            }
            return 42;
          }, 1000);
        })().catch((e) => {
          /* eat it */
        });
      });
  }

  setupCase4() {
      // CASE 4: throw in async
      //
      // Setup an observable where there is an exception in 
      // an async operation triggered from subscribe.
      // The exception is not handled by normal code.
      // The exception does get processed by the angular central exception handler.
      this.templateId$.subscribe(async (tid) => {
        let r = await later(() => {
          console.log(`[case 4] tid: ${tid}`);
          if ((tid % 3) == 0) {
            throw new Error(`[case 3] tid: ${tid}`);
          }
          return 42;
        }, 1000);

        return;
      });
  }
}

