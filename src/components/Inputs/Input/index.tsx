import { useState } from "react";
import { FormControl, InputStyled, LabelStyled } from "./styled"

interface InputProps {
    value: string;    
    label?: string;    
    width?: string;
    height?: string;
    type?: string;
}

export const Input = ({value = '', width = '100%', height = '56px', ...props} : InputProps) => {

    const [text, setText] = useState(value);    

    const handleChangeValue = (event: any) => setText(event.target.value);

    return (
        <FormControl>
            <LabelStyled>
                {props.label}
            </LabelStyled> 
            <InputStyled
                value={text}
                onChange={e => handleChangeValue(e)}                
                type='text'
                width={width}
                height={height}
            />
        </FormControl>
    )
}