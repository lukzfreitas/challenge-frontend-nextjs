import Image from "next/image";
import { ImageStyled } from "./styled";

interface ImageProps {
    src: string;
    height: string;
    width: string;
    alt?: string;
    responsive?: boolean;
    padding?: string;
}

const ImageComponent = (props: ImageProps) => {
    return (
        <ImageStyled padding={props.padding}>
            <Image
                src={props.src}
                alt={props.alt}
                width={props.width}
                height={props.height}                
            />
        </ImageStyled>

    )
}

export default ImageComponent;