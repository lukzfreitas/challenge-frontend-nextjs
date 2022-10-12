import ImageComponent from "../../components/DataDisplay/Image"
import Button from "../../components/Inputs/Button"
import { Input } from "../../components/Inputs/Input"
import { TextArea } from "../../components/Inputs/TextArea"
import LinksListFooter from "../LinksListFooter"
import { ColumnDesktopStyled, ColumnTabletStyled, Column2Styled, FooterContactStyled, ColumnMobile } from "./styled"
import { useIntl } from "react-intl";

const FooterContact = () => {

    const intl = useIntl();

    const linksList = [
        intl.formatMessage({ id: "page.home.howAreWe" }),
        intl.formatMessage({ id: "page.home.privacyPolicy" }),
        intl.formatMessage({ id: "page.home.fidelityProgram" }),
        intl.formatMessage({ id: "page.home.ourStores" }),
        intl.formatMessage({ id: "page.home.IWannaBeFranchisee" }),
        intl.formatMessage({ id: "page.home.advertiseHere" })
    ]

    const name = intl.formatMessage({ id: "page.home.name" })
    const typeYourMessage = intl.formatMessage({ id: "page.home.typeYourMessage" });
    const sendMessage = intl.formatMessage({ id: "page.home.sendMessage" });

    return (
        <FooterContactStyled>
            <ColumnDesktopStyled>
                <ImageComponent src="/logo.png" width="176px" height="50px" alt="Logo" />
            </ColumnDesktopStyled>
            <ColumnDesktopStyled>
                <LinksListFooter linksList={linksList}></LinksListFooter>
            </ColumnDesktopStyled>

            <ColumnTabletStyled>
                <ImageComponent src="/logo.png" width="176px" height="50px" alt="Logo" />
                <LinksListFooter linksList={linksList}></LinksListFooter>
            </ColumnTabletStyled>

            <Column2Styled>
                <Input value="André Lisboa" label={name} maxLength={40} margin="0 0 18px 0"></Input>
                <TextArea value="" label={typeYourMessage} maxLength={200} margin="0 0 16px 0"></TextArea>
                <Button type="primary" label={sendMessage} onClick={() => { }} width={"165px"} />
            </Column2Styled>

            <ColumnMobile>
                <ImageComponent src="/logo.png" width="176px" height="50px" alt="Logo" />
                <LinksListFooter linksList={linksList}></LinksListFooter>
                <Input value="André Lisboa" label={name} maxLength={40} margin="0 0 18px 0"></Input>
                <TextArea value="" label={typeYourMessage} maxLength={200} margin="0 0 8px 0"></TextArea>
                <Button type="primary" label={sendMessage} onClick={() => { }} width={"165px"} />
            </ColumnMobile>

        </FooterContactStyled>

    )
}

export default FooterContact;