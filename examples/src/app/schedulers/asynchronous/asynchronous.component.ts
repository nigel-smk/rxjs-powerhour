import { Component, OnInit } from '@angular/core';
import { from, asapScheduler } from 'rxjs';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.css']
})
export class AsynchronousComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  synchronousFrom() {
    from(['I','execute','synchronously'])
      .subscribe(console.log);
    console.log('method end');
  }

  asynchronousFrom() {
    from(['I','execute','asynchronously'], asapScheduler)
      .subscribe(console.log);
    console.log('method end');
  }

}
