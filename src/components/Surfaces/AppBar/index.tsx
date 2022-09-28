import { Col2, Row } from "../../../../styles/globals";
import ImageComponent from "../../DataDisplay/Image";
import Button from "../../Inputs/Button";
import InputSearch from "../../Inputs/InputSearch";

const AppBar = () => {
    return (
        <Row alignItems="center" justifyContent="space-between" height="115px" padding="32px 64px">
            <Col2>
                <Row justifyContent="space-between">
                    <Col2 padding="0px 20px">
                        <ImageComponent src="/logo.png" width="176px" height="50px" alt="Logo" />
                    </Col2>
                    <Col2 padding="0px 20px">
                        <InputSearch id='search' placeholder='O que deseja encontrar?' iconUrl='/search.png' />
                    </Col2>
                </Row>
            </Col2>
            <Col2>
                <Button label="Login" type="secondary" width="182px"></Button>
            </Col2>
        </Row>
    );
};

export default AppBar;
