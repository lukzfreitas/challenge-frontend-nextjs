import ImageComponent from "../../components/DataDisplay/Image"
import { ColN } from "../../components/Grid/ColumnN"
import { Row } from "../../components/Grid/Row"
import Button from "../../components/Inputs/Button"
import { Input } from "../../components/Inputs/Input"
import { TextArea } from "../../components/Inputs/TextArea"
import LinksListFooter from "../LinksListFooter"
import { ColumnDesktopStyled, ColumnTabletStyled, Column2Styled, FooterContactStyled } from "./styled"

const FooterContact = () => {
    return (
        <FooterContactStyled>
            <ColumnDesktopStyled>
                <ImageComponent src="/logo.png" width="176px" height="50px" alt="Logo" />
            </ColumnDesktopStyled>
            <ColumnDesktopStyled>
                <LinksListFooter linksList={['Quem somos nós', 'Política de privacidade', 'Programa fidelidade', 'Nossas lojas', 'Quero ser franqueado', 'Anuncie aqui']}></LinksListFooter>
            </ColumnDesktopStyled>

            <ColumnTabletStyled>
                <ImageComponent src="/logo.png" width="176px" height="50px" alt="Logo" />
                <LinksListFooter linksList={['Quem somos nós', 'Política de privacidade', 'Programa fidelidade', 'Nossas lojas', 'Quero ser franqueado', 'Anuncie aqui']}></LinksListFooter>
            </ColumnTabletStyled>

            <Column2Styled>
                <Input value="André Lisboa" label="Nome" margin="0 0 16px 0"></Input>
                <TextArea value="" label="Escreva sua mensagem" margin="0 0 8px 0"></TextArea>
                <Button type="primary" label="Enviar mensagem" onClick={() => { }} width={"165px"} />
            </Column2Styled>

        </FooterContactStyled>

    )
}

export default FooterContact;