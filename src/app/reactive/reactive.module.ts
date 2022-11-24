import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepSharedModule } from './steps';
const moduleImports = [ReactiveRoutingModule, FormsModule, ReactiveFormsModule, StepSharedModule];

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
const materialImports = [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatStepperModule];

import { ReactiveComponent } from './reactive.component';

@NgModule({
  declarations: [ReactiveComponent],
  exports: [ReactiveComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports]
})
export class ReactiveModule {}
