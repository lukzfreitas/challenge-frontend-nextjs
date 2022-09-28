import { Row } from "../../../../styles/globals";
import ImageComponent from "../../DataDisplay/Image";

const Banner = () => {
    return (
        <Row>
            <ImageComponent
                src="/banner.png"                
                width="2048w"
                height="500px"
            />
        </Row>
    );
};

export default Banner;
