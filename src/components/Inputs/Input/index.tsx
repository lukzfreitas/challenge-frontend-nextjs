import { useState } from "react";
import { FormControl, InputStyled, LabelStyled } from "./styled"

interface InputProps {
    value: string;
    label?: string;
    placeholder?: string;
    width?: string;
    height?: string;
    type?: string;
    margin?: string;
}

export const Input = ({ value = '', height = '56px', placeholder = '', ...props }: InputProps) => {

    const [text, setText] = useState(value);

    const handleChangeValue = (event: any) => setText(event.target.value);

    return (
        <FormControl margin={props.margin} height={height}>
            {props?.label ? 
            <LabelStyled>
                {props.label}
            </LabelStyled> : null}
            <InputStyled
                value={text}
                onChange={e => handleChangeValue(e)}
                type={props.type}
                height={height}
                placeholder={placeholder}
            />
        </FormControl>
    )
}