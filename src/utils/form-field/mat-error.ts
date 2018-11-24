import { AbstractControl } from '@angular/forms';



export function resolveErrorMessage(control: AbstractControl): string {

    // if any validator set custom error message
    if (control.hasError('custom')) {
        return control.getError('custom');
    }
    if (control.hasError('required')) {
        return 'Field is required.';
    }
    if (control.hasError('whitespace')) {
        return 'Field contains whitespace only.';
    }
    if (control.hasError('email')) {
        return 'Field should be a valid email.';
    }
    if (control.hasError('required')) {
        return 'Field is required.';
    }
}
