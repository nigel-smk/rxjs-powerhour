import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval, animationFrameScheduler, Subscription, ConnectableObservable } from 'rxjs';
import { map, publish } from 'rxjs/operators';

@Component({
  selector: 'app-animation-frame-hot',
  templateUrl: './animation-frame-hot.component.html',
  styleUrls: ['./animation-frame-hot.component.css']
})
export class AnimationFrameHotComponent implements OnInit {

  @ViewChild('myCanvas') canvasRef: ElementRef;

  public ctx: CanvasRenderingContext2D;

  private hotObservable;
  private subscription: Subscription;
  private connection: Subscription;

  constructor() { }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
  }

  create() {
    this.hotObservable = interval(0, animationFrameScheduler).pipe(
      map(data => 100 * Math.abs(Math.sin(data / 100))),
      publish()
    );
  }

  subscribe() {
    this.subscription = this.hotObservable.subscribe(radius => this.draw(radius));
  }

  connect() {
    this.connection = this.hotObservable.connect();
  }

  unsubscribeConnection() {
    this.connection.unsubscribe();
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }

  draw(radius: number) {
    this.ctx.clearRect(0, 0, 500, 500);
    this.ctx.beginPath();
    this.ctx.arc(250, 250, radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }

}
