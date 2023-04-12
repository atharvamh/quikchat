import { ChangeEvent, useState } from "react";
import { Checkbox } from "semantic-ui-react";
import useForm from "../../../hooks/useForm";
import { IFormElementConfig } from "../../../interfaces/IFormElementConfig";
import QuikInput from "../FormInput/quikInput";
import loginFormFields from "./fields";
import "../styles.css"

export default function LoginForm(){
    const [persistSignIn, setPersistSignIn] = useState<boolean>(false);
    const { renderFormFields, onSubmitConvertToJSON, handlerOnChangeForm } = useForm(loginFormFields)

    function handleFormSubmission(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const data = onSubmitConvertToJSON();
        console.log(data);
    }

    return (
        <div className="quik-form-container">
            <form name="login-form" onSubmit={(e) => handleFormSubmission(e)} className="quik-form-vertical">
                <h2 className="form-header">QuikChat Login</h2>
                {
                    renderFormFields().map(
                        (formField : {id: string, config : IFormElementConfig}) => {
                            return <QuikInput 
                                key={formField.id}
                                label={formField.config.elementLabel}
                                elementType={formField.config.elementType}
                                elementConfig={formField.config.elementConfig}
                                value={formField.config.value}
                                changed={(ev : ChangeEvent<HTMLInputElement>) => handlerOnChangeForm(ev, formField.id)}
                                errorMessage={formField.config.errorMessage ?? ""}
                            />
                        }
                    )
                }
                <Checkbox 
                    label="Keep me signed in" 
                    checked={persistSignIn} 
                    onChange={(e) => setPersistSignIn(e.currentTarget.checked)} 
                />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}