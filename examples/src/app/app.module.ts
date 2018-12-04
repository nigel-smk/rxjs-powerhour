import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PromiseVsObservableModule } from './promise-vs-observable/promise-vs-observable.module';
import { PromiseVsObservableComponent } from './promise-vs-observable/promise-vs-observable/promise-vs-observable.component';
import { CreatingAnObservableComponent } from './promise-vs-observable/creating-an-observable/creating-an-observable.component';
import { ManagingSubscriptionsComponent } from './promise-vs-observable/managing-subscriptions/managing-subscriptions.component';
import { TransformationOperatorComponent } from './operators/transformation-operator/transformation-operator.component';
import { OperatorsModule } from './operators/operators.module';
import { FilteringOperatorsComponent } from './operators/filtering-operators/filtering-operators.component';
import { CombinationOperatorsComponent } from './operators/combination-operators/combination-operators.component';
import { MulticastOperatorsComponent } from './operators/multicast-operators/multicast-operators.component';
import { LongLivedComponent } from './subjects/long-lived/long-lived.component';
import { SubjectsModule } from './subjects/subjects.module';
import { ErrorHandlingComponent } from './promise-vs-observable/error-handling/error-handling.component';
import { SchedulersModule } from './schedulers/schedulers.module';
import { AsynchronousComponent } from './schedulers/asynchronous/asynchronous.component';
import { AnimationFrameComponent } from './schedulers/animation-frame/animation-frame.component';
import { AnimationFrameHotComponent } from './schedulers/animation-frame-hot/animation-frame-hot.component';

const appRoutes: Routes = [
  { path: 'promise-vs-observable', component: PromiseVsObservableComponent },
  { path: 'creating-an-observable', component: CreatingAnObservableComponent },
  { path: 'managing-subscriptions', component: ManagingSubscriptionsComponent },
  { path: 'error-handling', component: ErrorHandlingComponent },
  { path: 'transformation-operator', component: TransformationOperatorComponent },
  { path: 'combination-operator', component: CombinationOperatorsComponent },
  { path: 'multicast-operator', component: MulticastOperatorsComponent },
  { path: 'filtering-operator', component: FilteringOperatorsComponent },
  { path: 'long-lived-subject', component: LongLivedComponent },
  { path: 'async-scheduler', component: AsynchronousComponent },
  { path: 'animation-scheduler', component: AnimationFrameComponent },
  { path: 'animation-scheduler-hot', component: AnimationFrameHotComponent },
  { path: '**', redirectTo: 'promise-vs-observable', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpClientModule,
    PromiseVsObservableModule,
    SubjectsModule,
    SchedulersModule

    OperatorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
