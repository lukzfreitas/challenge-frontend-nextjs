import Label from "../../Typograph/Label";
import { LinkStyle } from "./styled";

interface LinkProps {
    label: string;
    onClick: Function;
}

const Link = (props: LinkProps) => {
    return (
        <LinkStyle>
            <Label text={props.label} type="label3" onClick={() => props.onClick()} />
        </LinkStyle>
    )
}

export default Link;