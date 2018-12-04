import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformationOperatorComponent } from './transformation-operator/transformation-operator.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';
import { MulticastOperatorsComponent } from './multicast-operators/multicast-operators.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TransformationOperatorComponent, FilteringOperatorsComponent, CombinationOperatorsComponent, MulticastOperatorsComponent]
})
export class OperatorsModule { }
