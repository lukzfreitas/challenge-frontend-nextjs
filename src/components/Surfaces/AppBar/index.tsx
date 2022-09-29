
import ImageComponent from "../../DataDisplay/Image";
import { Row } from "../../Grid/Row";
import Button from "../../Inputs/Button";
import InputSearch from "../../Inputs/InputSearch";
import { AppBarStyled } from "./styled";

const AppBar = () => {
    return (
        <Row alignItems="center" justifyContent="space-between" height="115px" padding="32px 64px">
            <AppBarStyled>
                <Row justifyContent="space-between">
                    <AppBarStyled padding="0px 20px">
                        <ImageComponent src="/logo.png" width="176px" height="50px" alt="Logo" />
                    </AppBarStyled>
                    <AppBarStyled padding="0px 20px">
                        <InputSearch id='search' placeholder='O que deseja encontrar?' iconUrl='/search.png' />
                    </AppBarStyled>
                </Row>
            </AppBarStyled>
            <AppBarStyled>
                <Button label="Login" type="secondary" width="182px"></Button>
            </AppBarStyled>            
        </Row>
    );
};

export default AppBar;
