import { useState } from "react";
import ImageComponent from "../../DataDisplay/Image";
import { FormControl, Icon, InputStyle } from "./styled";

interface InputProps {
    id: string;
    value?: string;
    placeholder?: string;
    height?: string;
    width?: string;
    fontSize?: string;
    borderRadius?: number;
    backgroundColor?: string;
    border?: string;
    iconUrl?: string;
    iconWidth?: string;
    iconHeight?: string;
    type?: "text" | "button" | "checkbox" | "search" | "date" | "email" | "file" | "hidden" | "password" | "submit" | "tel" | "number"
    buttonText?: string;
}

const Input = ({
    value = '',
    iconWidth = '40px',
    iconHeight = '40px',
    buttonText = '',
    ...props
}: InputProps) => {
    const [text, setText] = useState(value);

    const [valid, setValid] = useState(false);

    const handleChangeValue = (event: any) => setText(event.target.value);

    return (
        <FormControl>
            <InputStyle
                value={text}
                onChange={e => handleChangeValue(e)}
                placeholder={props.placeholder}
                type={props.type}
            />
            {props.iconUrl ? <Icon>
                <ImageComponent src={props.iconUrl} alt="icon" width="20px" height="20px" />
            </Icon> : null}
        </FormControl>
    );
}

export default Input;