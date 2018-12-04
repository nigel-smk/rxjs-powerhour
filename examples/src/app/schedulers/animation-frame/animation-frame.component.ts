import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval, animationFrameScheduler, Subscription, ConnectableObservable } from 'rxjs';
import { map, publish } from 'rxjs/operators';

@Component({
  selector: 'app-animation-frame',
  templateUrl: './animation-frame.component.html',
  styleUrls: ['./animation-frame.component.css']
})
export class AnimationFrameComponent implements OnInit {

  @ViewChild('myCanvas') canvasRef: ElementRef;

  public ctx: CanvasRenderingContext2D;
  private subscription: Subscription;

  private hotObservable;
  private connection: Subscription;

  constructor() { }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
  }

  startAnimation() {
    this.subscription = interval(0, animationFrameScheduler).pipe(
      map(data => 100 * Math.abs(Math.sin(data / 100)))
    ).subscribe(radius => this.draw(radius))
  }

  stopAnimation() {
    this.subscription.unsubscribe();
  }

  draw(radius: number) {
    this.ctx.clearRect(0, 0, 500, 500);
    this.ctx.beginPath();
    this.ctx.arc(250, 250, radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }

}
