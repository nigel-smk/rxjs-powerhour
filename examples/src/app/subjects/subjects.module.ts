import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LongLivedComponent } from './long-lived/long-lived.component';
import { LongLivedService } from './long-lived.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LongLivedComponent],
  providers: [
    LongLivedService
  ]
})
export class SubjectsModule { }
