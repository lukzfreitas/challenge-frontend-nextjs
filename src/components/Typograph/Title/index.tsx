import { TitleStyled } from "./styled";

interface PropsTitle {
    text: string;
}

const Title = (props: PropsTitle) => {
    return (
        <TitleStyled>{props.text}</TitleStyled>
    )
}

export default Title;