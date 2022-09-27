import { useState } from "react";
import ImageComponent from "../../DataDisplay/Image";
import { FormControl, Icon, InputStyle } from "./styled";

interface InputSearchProps {
    id: string;
    value?: string;
    placeholder?: string;
    iconUrl?: string
}

const InputSearch = ({
    value = '',    
    ...props
}: InputSearchProps) => {
    const [text, setText] = useState(value);    

    const handleChangeValue = (event: any) => setText(event.target.value);

    return (
        <FormControl>
            <InputStyle
                value={text}
                onChange={e => handleChangeValue(e)}
                placeholder={props.placeholder}
                type='text'
            />
            <Icon>
                <ImageComponent src={props.iconUrl} alt="search" width="17px" height="17px" />
            </Icon>
        </FormControl>
    );
}

export default InputSearch;