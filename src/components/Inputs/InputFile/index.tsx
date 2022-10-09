import React from "react";
import { ButtonInputFileStyled, LabelStyled } from "./styled";

interface InputFileProps {

    disabled?: boolean;

    type?: 'primary' | 'secondary';

    width?: string;

    label: string;

    onClick?: Function;

    handleFiles?: Function;
}

const InputFile = ({
    disabled = false,
    type = "primary",
    width = "130px",
    label,
    onClick = () => { },
    handleFiles = () => { },
    ..._
}: InputFileProps) => {

    const hiddenFileInput = React.useRef(null);

    const onButtonClick = () => hiddenFileInput.current.click();

    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFiles(e.target.files);
        }
    };

    return (
        <>
            <ButtonInputFileStyled id="fileUpload" onClick={() => onButtonClick()} typeStyle={type} width={width}>
                <LabelStyled typeStyle="secondary">{label}</LabelStyled>
            </ButtonInputFileStyled>
            <input type="file"
                ref={hiddenFileInput}
                style={{ display: 'none' }}
                onChange={handleChange}
            />
        </>

    )
}


export default InputFile;