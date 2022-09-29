import { LabelStyle } from "./styled";

export interface LabelProps {
    text: string;
    onClick?: Function;    
    fontWeight?: number;
    fontSize?: string;
    color?: string
}

const Label = ({ fontWeight = 500, fontSize = '14px', color = "#464646", ...props }: LabelProps) => {
    return (
        <LabelStyle
            fontWeight={fontWeight}
            fontSize={fontSize}
            color={color}
            onClick={() => props.onClick()}
        >
            {props.text}
        </LabelStyle>
    )
}

export default Label;