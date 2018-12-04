import { Component, OnInit, OnDestroy } from '@angular/core';
import { LongLivedService } from '../long-lived.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-long-lived',
  templateUrl: './long-lived.component.html',
  styleUrls: ['./long-lived.component.css']
})
export class LongLivedComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public data: String = "none";

  constructor(private service: LongLivedService) { }

  ngOnInit() {
    this.init()
  }

  init() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.service.spaceFacts$.subscribe({
      next: data => this.data = JSON.stringify(data),
      error: console.error
     });
  }

  getSpaceFact() {
    this.service.getSpaceFact();
  }

  simulateError() {
    this.service.throwError();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
