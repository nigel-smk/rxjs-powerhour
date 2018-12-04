import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  complete() {
    of('Hi there').pipe(
      finalize(() => console.log('all done'))
    ).subscribe({
      next: console.log,
      complete: () => console.log('complete'),
      error: console.error
    })
  }

  unCaughtError() {
    throwError({ message: 'uhoh' }).pipe(
      finalize(() => console.log('all done'))
    ).subscribe({
      next: console.log,
      complete: () => console.log('complete'),
      error: console.error
    })
  }

  caughtError() {
    throwError({ message: 'uhoh' }).pipe(
      catchError(() => of('I recovered')),
      finalize(() => console.log('all done'))
    ).subscribe({
      next: console.log,
      complete: () => console.log('complete'),
      error: console.error
    })
  }

}
