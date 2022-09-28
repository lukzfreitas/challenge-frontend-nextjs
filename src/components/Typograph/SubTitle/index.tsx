import { SubTitleStyled } from "./styled";

interface SubTitleProps {
    text: string;
}

const SubTitle = (props: SubTitleProps) => {
    return (
        <SubTitleStyled>
            {props.text}
        </SubTitleStyled>
    )
}

export default SubTitle;