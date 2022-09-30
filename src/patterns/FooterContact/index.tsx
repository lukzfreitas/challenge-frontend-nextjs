import { ButtonPrimary } from "../../../stories/components/Inputs/Button/Button.stories"
import ImageComponent from "../../components/DataDisplay/Image"
import { Column } from "../../components/Grid/Column"
import { ColN } from "../../components/Grid/ColumnN"
import { Row } from "../../components/Grid/Row"
import Button from "../../components/Inputs/Button"
import { Input } from "../../components/Inputs/Input"
import { TextArea } from "../../components/Inputs/TextArea"
import LinksListFooter from "../LinksListFooter"
import { FooterContactStyled } from "./styled"

const FooterContact = () => {
    return (
        <FooterContactStyled>
            <Row padding="74px 152px 0px 152px">
                <ColN nCols={4}>
                    <ImageComponent src="/logo.png" width="176px" height="50px" alt="Logo" />
                </ColN>
                <ColN nCols={4}>
                    <LinksListFooter linksList={['Quem somos nós', 'Política de privacidade', 'Programa fidelidade', 'Nossas lojas', 'Quero ser franqueado', 'Anuncie aqui']}></LinksListFooter>
                </ColN>
                <ColN nCols={2} >
                    <Input value="André Lisboa" label="Nome" margin="0 0 16px 0"></Input>
                    <TextArea value="" label="Escreva sua mensagem" margin="0 0 8px 0"></TextArea>
                    <Button type="primary"  label="Enviar mensagem" onClick={() => {}} width={"165px"} />
                </ColN>
            </Row>
        </FooterContactStyled>

    )
}

export default FooterContact;