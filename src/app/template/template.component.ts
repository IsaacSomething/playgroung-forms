import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'base-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  formValues = {
    email: 'test@test',
    password: 'test'
  };
  constructor() {}

  submit(form: Form, $event: SubmitEvent) {
    console.log('event', event);
    console.log('form', form);
  }

  emailChangeEvent($event: InputEvent) {
    console.log('$event', $event);
  }
}
