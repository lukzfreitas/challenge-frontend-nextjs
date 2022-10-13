import { useState } from "react";
import { MessageError } from "../../Typograph/MessageError";
import { FormControl, LabelStyled, TextAreaStyled } from "./styled"

interface TextAreaProps {
    value: string;
    label?: string;
    width?: string;
    height?: string;
    type?: string;
    margin?: string;
    rows?: number;
    onChange?: Function,
    invalid?: boolean,
    invalidMessage?: string
}

export const TextArea = ({
    value = '',
    width = '100%',
    rows = 4,
    onChange = () => { },
    invalid = false,
    invalidMessage = '',
    ...props
}: TextAreaProps) => {

    const [text, setText] = useState(value);

    const handleChangeValue = (event: any) => {
        setText(event.target.value);
        onChange(event.target.value);
    }

    return (
        <>
            <FormControl margin={props.margin}>
                <TextAreaStyled
                    value={text}
                    onChange={e => handleChangeValue(e)}
                    width={width}
                    placeholder={props.label}
                    rows={rows}
                    invalid={invalid}
                />
            </FormControl>
            {invalid ? <MessageError message={invalidMessage} /> : null}
        </>
    )
}