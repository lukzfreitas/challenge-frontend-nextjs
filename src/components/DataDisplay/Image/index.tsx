import Image from "next/image";
import { ImageStyle } from "./styled";

interface ImageProps {
    src: string;
    width: string;
    height: string;
    alt?: string;
}

const ImageComponent = (props: ImageProps) => {
    return (
        <ImageStyle width={props.width}>
            <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
        </ImageStyle>

    )
}

export default ImageComponent;