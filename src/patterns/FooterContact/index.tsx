import ImageComponent from "../../components/DataDisplay/Image"
import Button from "../../components/Inputs/Button"
import { Input } from "../../components/Inputs/Input"
import { TextArea } from "../../components/Inputs/TextArea"
import LinksListFooter from "../LinksListFooter"
import { ColumnDesktopStyled, ColumnTabletStyled, Column2Styled, FooterContactStyled, ColumnMobile } from "./styled"
import { useIntl } from "react-intl";
import { useState } from "react"

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

    const nameLabel = intl.formatMessage({ id: "page.home.name" })
    const typeYourMessage = intl.formatMessage({ id: "page.home.typeYourMessage" });
    const sendMessage = intl.formatMessage({ id: "page.home.sendMessage" });

    const [validForm, setValidForm] = useState(true);

    const [name, setName] = useState("André Lisboa");

    const [message, setMessage] = useState("");

    const [nameIsValid, setNameIsValid] = useState(true);

    const [messageIsValid, setMessageIsValid] = useState(true);

    const formIsValid = () => {
        if (name.trim() == '') setNameIsValid(false);
        if (name.trim() == '') setMessageIsValid(false);
    }

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
                <Input
                    value={name}
                    label={nameLabel}
                    onChange={(value: string) => setName(value)}
                    invalid={!nameIsValid}
                    invalidMessage={'Campo nome deve ser preenchido'}
                    margin="0 0 18px 0"
                />
                <TextArea
                    value={message}
                    label={typeYourMessage}
                    onChange={(value: string) => setMessage(value)}
                    invalid={!messageIsValid}
                    invalidMessage={'Campo de envio de mensagem deve ser preenchido'}
                    margin="0 0 8px 0"
                />
                <Button type="primary" label={sendMessage} onClick={() => formIsValid()} width={"165px"} />
            </Column2Styled>

            <ColumnMobile>
                <ImageComponent src="/logo.png" width="176px" height="50px" alt="Logo" />
                <LinksListFooter linksList={linksList}></LinksListFooter>
                <Input
                    value={name}
                    label={nameLabel}
                    onChange={(value: string) => setName(value)}
                    invalid={!nameIsValid}
                    invalidMessage={'Campo nome deve ser preenchido'}
                    margin="0 0 18px 0"
                />
                <TextArea
                    value={message}
                    label={typeYourMessage}
                    onChange={(value: string) => setMessage(value)}
                    invalid={!messageIsValid}
                    invalidMessage={'Campo de envio de mensagem deve ser preenchido'}
                    margin="0 0 8px 0"
                />                
                <Button type="primary" label={sendMessage} onClick={() => formIsValid()} width={"165px"} />
            </ColumnMobile>

        </FooterContactStyled>

    )
}

export default FooterContact;