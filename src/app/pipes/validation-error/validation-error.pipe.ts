import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validationError',
})
export class ValidationErrorPipe implements PipeTransform {
  transform(
    errors: ValidationErrors | null,
    fieldName: string = 'Field'
  ): string {
    console.info(errors);
    if (!errors) {
      return '';
    }
    // Custom Error messages
    if (errors['custom']) {
      return errors['custom'];
    }
    // Required Error
    if (errors['required']) {
      return `${fieldName} is required.`;
    }

    // Email Error
    if (errors['email']) {
      return `${fieldName} is not valid.`;
    }

    // Min Length Error
    if (errors['minlength']) {
      return `${fieldName} length must be at least ${errors['minlength'].requiredLength}`;
    }

    // Max Length Error
    if (errors['maxlength']) {
      return `${fieldName} length must be less than ${errors['maxlength'].requiredLength}`;
    }

    // Confirm Password match
    // console.log(control.errors);
    if (errors['compare']) {
      let message = null;
      const error = errors['compare'];
      switch (error.type) {
        case 'MATCH': {
          message = `${fieldName} do not match with ${error.field}`;
          break;
        }
        case 'LOWER': {
          message = `${fieldName} should be lower than ${error.field}`;
          break;
        }
        case 'HIGHER': {
          message = `${fieldName} should be higher than ${error.field}`;
          break;
        }
        default: {
          message = `Comparison failed with field ${error.field}`;
          break;
        }
      }
      return message;
    }

    // White space
    if (errors['whiteSpace']) {
      return `${fieldName} contains only white spaces.`;
    }

    // valid url
    if (errors['url']) {
      return `${fieldName} is not a valid url.`;
    }
    return '';
  }
}
