
import SearchIcon from "../../DataDisplay/Icons/Search";
import ImageComponent from "../../DataDisplay/Image";
import { Row } from "../../Grid/Row";
import Button from "../../Inputs/Button";
import InputSearch from "../../Inputs/InputSearch";
import { AppBarStyled } from "./styled";

interface AppBarProps {
    buttonLabel?: string;
    buttonFunction?: Function
}

const AppBar = ({ buttonLabel = null, buttonFunction = () => {}, ..._ }: AppBarProps) => {    

    return (
        <Row alignItems="center" justifyContent="space-between" height="115px" padding="32px 152px" paddingTablet="32px 16px" paddingMobile="16px 22px">
            <AppBarStyled>
                <Row justifyContent="space-between" alignItems="center">
                    <AppBarStyled padding="0px 20px 0px 0px" paddingMobile="0px 0px">
                        <ImageComponent src="/logo.png" width="176px" height="50px" alt="Logo" />
                    </AppBarStyled>
                    <AppBarStyled padding="0px 20px 0px 0px">
                        <InputSearch id='search' placeholder='O que deseja encontrar?' iconUrl='/search.png' />
                    </AppBarStyled>
                </Row>
            </AppBarStyled>
            {buttonLabel ? <AppBarStyled paddingMobile="0px 0px">
                <Button label={buttonLabel} type="secondary" width="182px" onClick={() => buttonFunction()}></Button>
            </AppBarStyled> : null}
            <SearchIcon />
        </Row>
    );
};

export default AppBar;
