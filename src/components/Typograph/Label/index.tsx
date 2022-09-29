import { LabelStyle } from "./styled";

export interface LabelProps {
    text: string;
    type: 'label1' | 'label2' | 'label3'
}

const Label = (props: LabelProps) => {
    return (
        <LabelStyle type={props.type}>
            {props.text}
        </LabelStyle>
    )
}

export default Label;