import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-vs-observable',
  templateUrl: './promise-vs-observable.component.html',
  styleUrls: ['./promise-vs-observable.component.css']
})
export class PromiseVsObservableComponent implements OnInit {

  public promise: Promise<any>;
  public observable: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createPromise() {
    this.promise = new Promise<any>((resolve, reject) => {
      console.log("fake network call");
      resolve({data: "mock data"});
    });
  }

  createObservable(){
    this.observable = this.http.get('http://quotes.rest/qod.json?category=management');
  }

  thenPromise() {
    this.promise.then(data => console.log('Promise got data'));
  }

  subscribeObservable() {
    this.observable.subscribe(data => console.log('Observable got data'));
  }

}
