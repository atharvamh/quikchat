export interface IRules {
    required: boolean,
    isEmail?: boolean,
    isNumeric?: boolean,
    maxLength?: number,
    minLength?: number,
    customRegex?: {
        expression: RegExp,
        errorMessage: string;
    }
}