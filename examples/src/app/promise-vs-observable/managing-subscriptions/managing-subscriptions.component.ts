import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-managing-subscriptions',
  templateUrl: './managing-subscriptions.component.html',
  styleUrls: ['./managing-subscriptions.component.css']
})
export class ManagingSubscriptionsComponent implements OnInit {

  public observable: Observable<any>;
  public subscription: Subscription;

  constructor() { }

  ngOnInit() {
  }

  createSyncObservable(){
    let subscriber = (observer: Observer<String>) => {
      observer.next('Hello');
      observer.next('world');
      observer.complete();
    };

    this.observable = Observable.create(subscriber);
  }

  createAsyncObservable() {
    this.observable = interval(1000);
  }

  subscribeFiniteObservable() {
    let observer = {
      next: (data) => console.log(`Finite observable got ${data}`),
      complete: () => console.log('Finite observable completed')
    };

    this.subscription = this.observable.subscribe(observer);
  }

  subscribeInfiniteObservable() {
    let observer = {
      next: (data) => console.log(`Infinite observable got ${data}`),
      complete: () => console.log('Infinite observable completed')
    };

    this.subscription = this.observable.subscribe(observer);
  }

  unsubscribeInfiniteObservable() {
    this.subscription.unsubscribe();
  }

}
