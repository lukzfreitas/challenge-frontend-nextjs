
import SearchIcon from "../../DataDisplay/Icons/Search";
import ImageComponent from "../../DataDisplay/Image";
import { Row } from "../../Grid/Row";
import Button from "../../Inputs/Button";
import InputSearch from "../../Inputs/InputSearch";
import { Icon } from "../../Inputs/InputSearch/styled";
import { AppBarStyled } from "./styled";

const AppBar = () => {
    return (
        <Row alignItems="center" justifyContent="space-between" height="115px" padding="32px 154px" paddingTablet="32px 16px" paddingMobile="16px 22px">
            <AppBarStyled>
                <Row justifyContent="space-between" alignItems="center">
                    <AppBarStyled padding="0px 20px" paddingMobile="0px 0px">
                        <ImageComponent src="/logo.png" width="176px" height="50px" alt="Logo" />
                    </AppBarStyled>
                    <AppBarStyled padding="0px 20px">
                        <InputSearch id='search' placeholder='O que deseja encontrar?' iconUrl='/search.png' />
                    </AppBarStyled>                    
                </Row>
            </AppBarStyled>
            <AppBarStyled paddingMobile="0px 0px">
                <Button label="Login" type="secondary" width="182px"></Button>
            </AppBarStyled>            
            <SearchIcon />
        </Row>
    );
};

export default AppBar;
