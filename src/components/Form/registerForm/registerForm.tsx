import { ChangeEvent, useState } from "react";
import { Checkbox } from "semantic-ui-react";
import useForm from "../../../hooks/useForm";
import { IFormElementConfig } from "../../../interfaces/IFormElementConfig";
import QuikInput from "../FormInput/quikInput";
import registerFormFields from "./fields";
import "../styles.css"
import { NavLink } from "react-router-dom";


export default function RegisterForm(){
    const [tncAcceptance, setTncAcceptance] = useState<boolean>(false);
    const { renderFormFields, onSubmitConvertToJSON, handlerOnChangeForm } = useForm(registerFormFields)

    function handleFormSubmission(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const data = onSubmitConvertToJSON();
        console.log(data);
    }

    return (
        <div className="quik-form-container">
            <form name="register-form" onSubmit={(e) => handleFormSubmission(e)} className="quik-form-vertical">
                <h2 className="quik-form-header">QuikChat Register</h2>
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
                    label="I agree to the Terms and Conditions" 
                    checked={tncAcceptance} 
                    onChange={(e) => setTncAcceptance(e.currentTarget.checked)} 
                />
                <button type="submit">
                    Register
                </button>
            </form>
            <div className="quik-form-footer">
                <p>Already Registered ?</p>
                <NavLink to="/login">Login</NavLink>
            </div>
        </div>
    )
}