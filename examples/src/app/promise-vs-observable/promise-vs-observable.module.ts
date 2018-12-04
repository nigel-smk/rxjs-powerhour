import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromiseVsObservableComponent } from './promise-vs-observable/promise-vs-observable.component';
import { CreatingAnObservableComponent } from './creating-an-observable/creating-an-observable.component';
import { ManagingSubscriptionsComponent } from './managing-subscriptions/managing-subscriptions.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PromiseVsObservableComponent, CreatingAnObservableComponent, ManagingSubscriptionsComponent, ErrorHandlingComponent]
})
export class PromiseVsObservableModule { }
