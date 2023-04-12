import { IFieldsWithConfig } from "../../../interfaces/IFormElementConfig";

const loginFormFields : IFieldsWithConfig  = {
    email : {
        elementLabel : "Email*",
        elementType : "input",
        elementConfig : {
            type: "text",
            placeholder: "Please enter your email",
            name: "email"
        },
        value: "",
        validation : {
            required: true,
            isEmail: true
        },
        valid: false,
        errorMessage : null
    },

    password : {
        elementLabel: "Password*",
        elementType : "input",
        elementConfig : {
            type: "password",
            placeholder : "Please enter your password",
            name : "password"
        },
        value : "",
        validation: {
            required: true,
            minLength: 6
        },
        valid: false,
        errorMessage: null
    }
}

export default loginFormFields