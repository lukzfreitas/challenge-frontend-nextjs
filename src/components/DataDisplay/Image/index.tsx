import Image from "next/image";
import { ImageStyle } from "./styled";

interface ImageProps {
    src: string;
    height: string;
    width: string;
    alt?: string;
    responsive?: boolean;
    children: any;
}

const ImageComponent = (props: ImageProps) => {
    return (
        props.responsive ?
            <ImageStyle>
                <Image
                    src={props.src}
                    alt={props.alt}
                    width={props.width}
                    height={props.height}                    
                    layout='responsive'
                    objectFit='contain'
                />
                {props.children}
            </ImageStyle>
            : <Image
                src={props.src}
                alt={props.alt}
                width={props.width}
                height={props.height}
            />
    )
}

export default ImageComponent;