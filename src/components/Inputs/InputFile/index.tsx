import React from "react";
import { ButtonInputFileStyled, LabelStyled } from "./styled";


interface InputFileProps {

    disabled?: boolean;

    type?: 'primary' | 'secondary';

    width?: string;

    label: string;

    onClick?: () => void;
}

const InputFile = ({
    disabled = false,
    type = "primary",
    width = "130px",
    label,
    onClick = () => { },
    ...props
}: InputFileProps) => {

    const hiddenFileInput = React.useRef(null);

    const onButtonClick = () => hiddenFileInput.current.click();     

    return (
        <>
            <ButtonInputFileStyled id="fileUpload" onClick={() => onButtonClick()} typeStyle={type} width={width}>
                <LabelStyled typeStyle="secondary">{label}</LabelStyled>
            </ButtonInputFileStyled>
            <input type="file"
                ref={hiddenFileInput}
                style={{ display: 'none' }} />
        </>

    )    
}


export default InputFile;