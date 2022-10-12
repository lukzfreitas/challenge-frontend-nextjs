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
    onChange?: Function;
    maxLength?: number;
}

export const Input = ({
    onChange = () => { },
    value = '',
    height = '56px',
    placeholder = '',
    ...props
}: InputProps) => {

    const [text, setText] = useState(value);

    const handleChangeValue = (event: any) => {
        if (props.maxLength !== null && event.target.value.length >= props.maxLength) {
            return;
        }
        setText(event.target.value);
        onChange(event.target.value);
    }

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