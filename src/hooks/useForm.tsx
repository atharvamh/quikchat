import { useState } from "react";
import { checkValidation } from "../utils/checkValidation";
import { IFieldsWithConfig } from "../interfaces/IFormElementConfig";

const useForm = (fieldsWithConfig : IFieldsWithConfig) => {
    const [fieldsState, setFieldsState] = useState({ ...fieldsWithConfig });
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    function renderFormFields() {
        const formElementsArr = [];
        if(fieldsState) {
            for(let key in fieldsState){
                formElementsArr.push({
                    id: key,
                    config: fieldsState[key]
                })
            }
        }

        return formElementsArr;
    }

    function onSubmitConvertToJSON(){
        const data : { [key: string] : string } = {}
        for(let key in fieldsState){
            data[key] = fieldsState[key].value
        }
        return data;
    }

    function onResetForm(){
        setFieldsState(fieldsWithConfig);
        setIsFormValid(false);
    }

    function handlerFormValidation(formData: IFieldsWithConfig){
        let isValidForm = true;
        for(let inputElement in formData){
            isValidForm = isValidForm && formData[inputElement].valid;
        }

        return isValidForm;
    }

    function handlerOnChangeForm(ev: React.ChangeEvent<HTMLInputElement>, id: string){
        const input = ev.currentTarget.value;
        const validation = checkValidation(input, fieldsState[id].validation);
        const formData : IFieldsWithConfig = {
            ...fieldsState,
            [id]: {
                ...fieldsState[id],
                value: input,
                valid: validation.isValid,
                errorMessage: validation.error
            }
        }

        setFieldsState(formData);
        setIsFormValid(handlerFormValidation(formData));
    }

    function handlerLoadData(data: any){
        const loadForm = { ...fieldsState }
        for(let formElement in loadForm){
            loadForm[formElement] = {
                ...fieldsState[formElement],
                value: data[formElement] || "",
                valid: true
            }
        }

        setFieldsState(loadForm);
        setIsFormValid(true);
    }

    return { renderFormFields, isFormValid, handlerOnChangeForm, handlerLoadData, onResetForm, onSubmitConvertToJSON }
}

export default useForm;