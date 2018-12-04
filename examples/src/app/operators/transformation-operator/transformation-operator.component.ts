import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map, scan, take } from 'rxjs/operators';

@Component({
  selector: 'app-transformation-operator',
  templateUrl: './transformation-operator.component.html',
  styleUrls: ['./transformation-operator.component.css']
})
export class TransformationOperatorComponent implements OnInit {

  public mapSubscription: Subscription;
  public scanSubscription: Subscription;

  constructor() { }

  ngOnInit() {
  }

  createAndSubscribeMap() {
    this.mapSubscription = interval(100).pipe(
      map(data => 100 * Math.sin(data)),
      take(10)
    ).subscribe({
      next: mapped => console.log(mapped)
    });
  }

  createAndSubscribeScan() {
    this.scanSubscription = interval(100).pipe(
      scan((acc, curr) => curr + acc, 0)
    ).subscribe({
      next: mapped => console.log(mapped)
    });
  }

  unsubscribeMap() {
    this.mapSubscription.unsubscribe();
  }

  unsubscribeScan() {
    this.scanSubscription.unsubscribe();
  }

}
