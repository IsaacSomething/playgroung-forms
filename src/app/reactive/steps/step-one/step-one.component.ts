import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'base-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {
  readonly TITLE_MAX_LENGTH = 60;

  stepOneForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(this.TITLE_MAX_LENGTH)]],
    releasedAt: ['', [Validators.required]],
    downloadsAllowed: [false, [Validators.requiredTrue]],
    longDescription: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: FormBuilder) {}
}
