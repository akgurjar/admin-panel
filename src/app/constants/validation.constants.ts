import {
  Validators,
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormArray,
} from '@angular/forms';

export const CustomValidators = {
  whiteSpace(control: AbstractControl) {
    if (typeof control.value !== 'number') {
      const value = control.value || '';
      const isWhitespace =
        value.trim().length !== value.length && value.trim().length === 0;
      return !isWhitespace ? null : { whiteSpace: true };
    }
    return null;
  },
  get name(): ValidatorFn[] {
    return [this.whiteSpace, Validators.required, Validators.maxLength(30)];
  },
  get email(): ValidatorFn[] {
    return [this.whiteSpace, Validators.email, Validators.maxLength(30)];
  },
  get password(): ValidatorFn[] {
    return [
      this.whiteSpace,
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(24),
    ];
  },
  number(control: AbstractControl): { [key: string]: any } | null {
    if (isNaN(parseFloat(control.value))) {
      return { number: true };
    }
    return null;
  },
  minLength(requiredLength: number) {
    return (control: AbstractControl) => {
      if (control.value) {
        const value = control.value.toString();
        if (value.length < requiredLength) {
          return { minlength: { requiredLength } };
        }
      }
      return null;
    };
  },
  maxLength(requiredLength: number) {
    return (control: AbstractControl) => {
      if (control.value) {
        const value = control.value.toString();
        if (value.length > requiredLength) {
          return { maxlength: { requiredLength } };
        }
      }
      return null;
    };
  },
  get phone(): ValidatorFn[] {
    return [this.number, this.minLength(7), this.maxLength(15)];
  },
  match(field: string, parentControl?: FormGroup | FormArray): ValidatorFn {
    return this.compare(field, 'MATCH', parentControl)((a, b) => a === b);
  },
  lowerThan(field: string, parentControl?: FormGroup | FormArray): ValidatorFn {
    return this.compare(field, 'LOWER', parentControl)((a, b) => a < b);
  },
  higherThan(
    field: string,
    parentControl?: FormGroup | FormArray
  ): ValidatorFn {
    return this.compare(field, 'HIGHER', parentControl)((a, b) => a > b);
  },
  compare(
    field: string,
    type: 'MATCH' | 'LOWER' | 'HIGHER',
    parentControl?: FormGroup | FormArray
  ): (fn: (a: any, b: any) => boolean) => ValidatorFn {
    return (fn: (a: any, b: any) => boolean): ValidatorFn => {
      return (control: AbstractControl) => {
        const parent = parentControl ? parentControl : control.parent;
        if (parent) {
          const matchControl: AbstractControl = (
            parent.controls as Record<string, AbstractControl<any, any>>
          )[field];
          if (!matchControl) {
            throw new Error(
              `Match Control [${field}] not found on parent control.`
            );
          }
          // console.log(fn(control.value, matchControl.value));
          if (matchControl.dirty && !fn(control.value, matchControl.value)) {
            return {
              compare: {
                field,
                type,
              },
            };
          }
        }
        return null;
      };
    };
  },
  url(control: AbstractControl) {
    const regForUrl =
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (!regForUrl.test(control.value)) {
      return { url: true };
    }
    return null;
  },
};
