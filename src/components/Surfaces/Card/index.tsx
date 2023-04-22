import { useSession } from 'next-auth/react';
import ImageComponent from '../../DataDisplay/Image';
import { Column } from '../../Grid/Column';
import { Row } from '../../Grid/Row';
import Link from '../../Navigation/Link';
import Label from '../../Typograph/Label';
import ImageEditComponent from '../../DataDisplay/ImageEdit';

interface CardProps {
  label1: string;
  label2: string;
  label3?: string;
  link?: string;
  image: string;
  onClick?: Function;
}

const Card = ({ onClick = () => {}, ...props }: CardProps) => {
  const { data: session, status } = useSession();

  return (
    <Row>
      <Column padding="0px 8px">
        {status === 'authenticated' ? (
          <ImageEditComponent
            src={props.image}
            height="290px"
            width="300px"
          ></ImageEditComponent>
        ) : (
          <ImageComponent
            src={props.image}
            height="290px"
            width="300px"
          ></ImageComponent>
        )}
        <Label text={props.label1} />
        <Label text={props.label2} fontWeight={700} fontSize={'16px'} />
        {props.label3 ? (
          <Label
            text={props.label3}
            fontWeight={500}
            fontSize={'14px'}
            lineHeight={'16px'}
          />
        ) : (
          <Link label={props.link} onClick={() => onClick()} />
        )}
      </Column>
    </Row>
  );
};

export default Card;
