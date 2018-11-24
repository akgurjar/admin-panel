import { ValidatorFn, Validators, AbstractControl, FormGroup, FormArray } from '@angular/forms';


export const FieldValidators = {
    get name(): ValidatorFn[] {
        return [
            this.whiteSpace,
            Validators.required,
            Validators.maxLength(24)
        ];
    },
    get email(): ValidatorFn[] {
        return [
            this.whiteSpace,
            Validators.required,
            Validators.email,
            Validators.maxLength(30),
        ];
    },
    get password(): ValidatorFn[] {
        return [
            this.whiteSpace,
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(24)
        ];
    },
    whiteSpace(control: AbstractControl): {[key: string]: any} | null {
        const { value } = control;
        if (value.trim() === '') {
            return { whiteSpace: true };
        }
        return null;
    },
    matchControl(matchField: string, parent?: FormGroup | FormArray): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
            const { value } = control;
            if (!parent) {
                parent = control.parent;
            }
            if (value === parent.controls[matchField].value) {
                return {
                    match: {
                        field: matchField
                    }
                };
            }
            return null;
        };
    }
};
