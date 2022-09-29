import Label from "../../Typograph/Label";
import { LinkStyle } from "./styled";

interface LinkProps {
    label: string;
    onClick: Function;
    fontWeight?: number;
    fontSize?: string;
    color?: string;
}

const Link = ({fontWeight = 700, fontSize = "16px", color = "#2A7AE4", ...props}: LinkProps) => {
    return (
        <LinkStyle>
            <Label
                text={props.label}
                fontWeight={fontWeight}
                fontSize={fontSize}
                color={color}
                onClick={() => props.onClick()}
            />
        </LinkStyle>
    )
}

export default Link;