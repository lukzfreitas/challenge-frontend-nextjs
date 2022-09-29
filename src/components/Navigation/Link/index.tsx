import Label from "../../Typograph/Label";
import { LinkStyle } from "./styled";

interface LinkProps {
    label: string;
    onClick: Function;
}

const Link = (props: LinkProps) => {
    return (
        <LinkStyle>
            <Label
                text={props.label}
                fontWeight={700}
                fontSize={"16px"}
                color={"#2A7AE4"}
                onClick={() => props.onClick()}
            />
        </LinkStyle>
    )
}

export default Link;