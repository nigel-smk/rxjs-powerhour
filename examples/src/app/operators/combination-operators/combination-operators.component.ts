import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { merge } from 'rxjs/operators';

@Component({
  selector: 'app-combination-operators',
  templateUrl: './combination-operators.component.html',
  styleUrls: ['./combination-operators.component.css']
})
export class CombinationOperatorsComponent implements OnInit {

  public subscription: Subscription;

  constructor() { }

  ngOnInit() {
  }

  mergeAndSub() {
    let otherObservable = interval(500);

    this.subscription = interval(1000).pipe(
      merge(otherObservable)
    ).subscribe(console.log);
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }

}
