import { Input } from "semantic-ui-react";

interface IQuikInputProps {
    label: string;
    elementType: string;
    elementConfig: any;
    value: string;
    changed: any;
    errorMessage: string;
}

export default function QuikInput(props : IQuikInputProps){
    let inputElement = null;

    switch(props.elementType){
        case "input" : {
            inputElement = (
                <Input
                    { ...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    className="quik-input-field"
                    label={props.label}
                />
            )
        }

        break;
    }

    return (
        <div style={{ display : "flex", flexFlow : "column" }}>
            { inputElement }
            {
                props.errorMessage ?
                <span style={{ color : "red", fontSize: "0.8em" }}>{props.errorMessage}</span> : <></>
            }
        </div>
    )
}