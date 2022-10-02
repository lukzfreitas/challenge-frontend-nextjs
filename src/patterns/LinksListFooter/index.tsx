import Link from "../../components/Navigation/Link";
import { LinksListStyled } from "./styled";

interface LinksListFooter {
    linksList: string[];
}

const LinksListFooter = (props: LinksListFooter) => {
    return (
        <LinksListStyled>
            {props.linksList.map((link, index) =>
                <Link
                    key={index}
                    label={link}
                    fontSize={'16px'}
                    fontWeight={500}
                    color={"#464646"}
                    onClick={() => { }}
                />
            )}
        </LinksListStyled>
    )
}

export default LinksListFooter;