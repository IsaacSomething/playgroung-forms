import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const moduleImports = [ReactiveRoutingModule, FormsModule, ReactiveFormsModule];

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const materialImports = [MatFormFieldModule, MatInputModule];

import { ReactiveComponent } from './reactive.component';

@NgModule({
  declarations: [ReactiveComponent],
  exports: [ReactiveComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports]
})
export class ReactiveModule {}
