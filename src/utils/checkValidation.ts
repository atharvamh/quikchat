import { IRules } from "../interfaces/IRules";

export const checkValidation = (value: string, rules: IRules) => {
    let isValid = true;
    let error = null;

    if(!rules){
        return {
            isValid,
            error
        }
    }

    if(rules.required){
        isValid = value.trim() !== "" && isValid;
        if(!isValid){
            error = "This field is required"
        }
    }

    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid;
        if(!isValid){
            error = `This field should contain minimum of ${rules.minLength} characters`;
        }
    }

    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid;
        if(!isValid){
            error = `This field should contain maximum of ${rules.maxLength} characters`;
        }
    }

    if(rules.isEmail){
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
        if (!isValid) {
            error = `This email is not valid`;
        }
    }

    if(rules.isNumeric){
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
        if (!isValid) {
            error = `This isn't a number`;
        }
    }

    if(rules.customRegex){
        isValid = rules.customRegex.expression.test(value) && isValid;
        if(!isValid){
            error = rules.customRegex.errorMessage ?? "This field does not obey a specific pattern";
        }
    }

    return {
        isValid,
        error
    }
}