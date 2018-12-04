import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';
import { switchMap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LongLivedService {

  private sourceSwitch = new Subject<Observable<any>>();
  private data$ = this.sourceSwitch.pipe(
    switchMap(response => response),
    shareReplay(1)
  );

  constructor(private http: HttpClient) { }

  get spaceFacts$() {
    return this.data$;
  }

  public getSpaceFact() {
    this.sourceSwitch.next(this.http.get('http://api.chew.pro/trbmb'));
  }

  public throwError() {
    this.sourceSwitch.next(throwError({ message: 'api error simulation' }))
  }

}
