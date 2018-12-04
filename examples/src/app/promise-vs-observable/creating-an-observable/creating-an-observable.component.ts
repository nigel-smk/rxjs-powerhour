import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';

@Component({
  selector: 'app-creating-an-observable',
  templateUrl: './creating-an-observable.component.html',
  styleUrls: ['./creating-an-observable.component.css']
})
export class CreatingAnObservableComponent implements OnInit {

  public observable: Observable<any>;

  constructor() { }

  ngOnInit() {
  }

  createObservable(){
    let subscriber = (observer: Observer<String>) => {
      observer.next('Hello');
      observer.next('world');
    };

    this.observable = Observable.create(subscriber);
  }

  subscribeObservable() {
    let observer = {
      next: (data) => console.log(`Observable got ${data}`)
    };

    this.observable.subscribe(observer);
  }

}
