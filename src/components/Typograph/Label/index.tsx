import { LabelStyle } from "./styled";

export interface LabelProps {
    text: string;
    onClick?: Function;    
    fontWeight?: number;
    fontSize?: string;
    color?: string;
    textAlign: string;
}

const Label = ({ fontWeight = 500, fontSize = '14px', color = "#464646", onClick = () => {}, ...props }: LabelProps) => {
    return (
        <LabelStyle
            fontWeight={fontWeight}
            fontSize={fontSize}
            color={color}
            onClick={() => onClick()}
            textAlign={props.textAlign}
        >
            {props.text}
        </LabelStyle>
    )
}

export default Label;