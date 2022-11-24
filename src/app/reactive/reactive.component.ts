import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '@base/validators/validator-password';

@Component({
  selector: 'base-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent {
  createForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
}
