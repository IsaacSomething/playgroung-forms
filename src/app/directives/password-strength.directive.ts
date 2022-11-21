import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { createPasswordStrengthValidator } from '@base/validators/validator-password';

@Directive({
  selector: '[basePasswordStrength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordStrengthDirective, multi: true }]
})
export class PasswordStrengthDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return createPasswordStrengthValidator()(control);
  }
}
