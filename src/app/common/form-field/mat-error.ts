import { AbstractControl } from '@angular/forms';


export function MAT_ERROR(control: AbstractControl, fieldName: string = 'Field'): string {
    // Custom Error messages
    if (control.hasError('custom')) {
        return control.errors['custom'];
    }
    // Required Error
    if (control.hasError('required')) {
        return `${fieldName} is required.`;
    }

    // Email Error
    if (control.hasError('email')) {
        return `${fieldName} is not valid.`;
    }

    // Min Length Error
    if (control.hasError('minlength')) {
        return `${fieldName} length must be at least ${control.getError('minlength').requiredLength}`;
    }

    // Max Length Error
    if (control.hasError('maxlength')) {
        return `${fieldName} length must be less than ${control.getError('maxlength').requiredLength}`;
    }

    // Confirm Password match
    // console.log(control.errors);
    if (control.hasError('compare')) {
        let message = null, error = control.getError('compare');
        switch(error.type) {
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
            default : {
                message = `Comparison failed with field ${error.field}`;
                break;
            }
        }
        return message;
    }

    // White space
    if (control.hasError('whiteSpace')) {
        return `${fieldName} contains only white spaces.`;
    }

    // valid url
    if(control.hasError('url')) {
        return `${fieldName} is not a valid url.`;
    }
}
