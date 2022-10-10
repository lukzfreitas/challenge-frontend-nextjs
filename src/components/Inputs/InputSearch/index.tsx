import { useState } from "react";
import SearchIcon from "../../DataDisplay/Icons/Search";
import ImageComponent from "../../DataDisplay/Image";
import { FormControl, IconStyled, InputSearchStyled } from "./styled";

interface InputSearchProps {
    id: string;
    value?: string;
    placeholder?: string;
    iconUrl?: string;    
}

const InputSearch = ({
    value = '',    
    ...props
}: InputSearchProps) => {
    const [text, setText] = useState(value);    

    const handleChangeValue = (event: any) => setText(event.target.value);

    return (
        <FormControl>
            <InputSearchStyled
                value={text}
                onChange={e => handleChangeValue(e)}
                placeholder={props.placeholder}
                type='text'                
            />
            <IconStyled>
                <SearchIcon/>
            </IconStyled>
        </FormControl>
    );
}

export default InputSearch;