import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';
import { AnimationFrameComponent } from './animation-frame/animation-frame.component';
import { AnimationFrameHotComponent } from './animation-frame-hot/animation-frame-hot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AsynchronousComponent, AnimationFrameComponent, AnimationFrameHotComponent]
})
export class SchedulersModule { }
