import { useState } from "react";
import { FormControl, LabelStyled, TextAreaStyled } from "./styled"

interface TextAreaProps {
    value: string;    
    label?: string;    
    width?: string;
    height?: string;
    type?: string;
    margin?: string;
}

export const TextArea = ({value = '', width = '100%', height = '82px', ...props} : TextAreaProps) => {

    const [text, setText] = useState(value);    

    const handleChangeValue = (event: any) => setText(event.target.value);

    return (
        <FormControl margin={props.margin} height={height}>
            <LabelStyled>
                {props.label}
            </LabelStyled> 
            <TextAreaStyled          
                value={text}
                onChange={e => handleChangeValue(e)}                
                width={width}
                height={height}
            />
        </FormControl>
    )
}