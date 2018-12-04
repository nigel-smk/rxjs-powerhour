import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-multicast-operators',
  templateUrl: './multicast-operators.component.html',
  styleUrls: ['./multicast-operators.component.css']
})
export class MulticastOperatorsComponent implements OnInit {

  public observable: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createObservable(){
    this.observable = this.http.get('http://quotes.rest/qod.json?category=management').pipe(
      share()
    );
  }

  subscribeObservable() {
    this.observable.subscribe(data => console.log(data));
  }

}
