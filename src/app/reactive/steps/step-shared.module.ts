import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const moduleImports = [FormsModule, ReactiveFormsModule];

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
const materialImports = [MatInputModule, MatFormFieldModule, MatDatepickerModule, MatIconModule, MatCheckboxModule, MatSelectModule];

import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
const componentImports = [StepOneComponent, StepTwoComponent, StepThreeComponent];

@NgModule({
  declarations: [...componentImports],
  exports: [...componentImports],
  imports: [CommonModule, ...moduleImports, ...materialImports]
})
export class StepSharedModule {}
