import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { FormsModule } from '@angular/forms';
const moduleImports = [TemplateRoutingModule, FormsModule];

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
const materialImports = [MatFormFieldModule, MatInputModule, MatButtonModule];

import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [TemplateComponent],
  exports: [TemplateComponent],
  imports: [CommonModule, ...moduleImports, ...materialImports]
})
export class TemplateModule {}
