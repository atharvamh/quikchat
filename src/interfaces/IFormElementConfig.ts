import { IRules } from "./IRules";

export interface IFormElementConfig {
    elementLabel: string,
    elementType: string,
    elementConfig: any,
    value: string,
    validation: IRules,
    valid: boolean,
    errorMessage: string | null
}

export interface IFieldsWithConfig {
    [key: string] : IFormElementConfig
}