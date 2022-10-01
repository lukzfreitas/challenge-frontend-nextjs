import { Column } from "../../components/Grid/Column";
import Link from "../../components/Navigation/Link";

interface LinksListFooter {
    linksList: string[];
}


const LinksListFooter = (props: LinksListFooter) => {
    return (
        <Column>
            {props.linksList.map((link, index) =>
                <Link key={index} label={link} fontSize={'16px'} fontWeight={500} color={"#464646"} onClick={() => { }} />
            )}
        </Column>
    )
}

export default LinksListFooter;