import { Component, OnInit } from '@angular/core';
import { interval, from } from 'rxjs';
import { distinct, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-filtering-operators',
  templateUrl: './filtering-operators.component.html',
  styleUrls: ['./filtering-operators.component.css']
})
export class FilteringOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createAndSubDistinct() {
    from(['h','h','e','l','e','l','h','o']).pipe(
      distinct()
    ).subscribe(console.log);
  }

  createAndSubTakeWhile() {
    interval(500).pipe(
      takeWhile(data => data < 5)
    ).subscribe({
      next: console.log,
      complete: () => console.log("complete")
    })
  }

}
