import { useSession } from 'next-auth/react';
import ImageComponent from '../../DataDisplay/Image';
import { Column } from '../../Grid/Column';
import { Row } from '../../Grid/Row';
import Link from '../../Navigation/Link';
import Label from '../../Typograph/Label';
import ImageEditComponent from '../../DataDisplay/ImageEdit';
import { useState } from 'react';
import InputLabel from '../../Inputs/InputLabel';
import { useIntl } from 'react-intl';

interface CardProps {
  label1: string;
  label2: string;
  label3?: string;
  link?: string;
  image: string;
  onClick?: Function;
  onDelete?: Function;
  onEdit?: Function;
  onCancel?: Function;
  onChangeLabel1?: Function;
  onChangeLabel2?: Function;
}

const Card = ({ onClick = () => {}, ...props }: CardProps) => {
  const intl = useIntl();
  const cancel = intl.formatMessage({ id: 'page.products.cancel' });
  const confirm = intl.formatMessage({ id: 'page.products.confirm' });

  const { data: session, status } = useSession();
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Row>
      <Column padding="0px 8px">
        {status === 'authenticated' && !isDelete && !isEdit ? (
          <ImageEditComponent
            src={props.image}
            height="290px"
            width="300px"
            onDeleteEvent={() => setIsDelete(true)}
            onEditEvent={() => setIsEdit(true)}
          ></ImageEditComponent>
        ) : (
          <ImageComponent
            src={props.image}
            height="290px"
            width="300px"
          ></ImageComponent>
        )}
        {isEdit ? (
          <InputLabel
            autoFocus={true}
            maxWidth="180px"
            value={props.label1}
            onChange={(value: string) => props.onChangeLabel1(value)}
          />
        ) : (
          <Label text={props.label1} />
        )}
        {isEdit ? (
          <InputLabel
            value={props.label2}
            maxWidth="160px"
            fontWeight={700}
            fontSize={'16px'}
            onChange={(value: string) => props.onChangeLabel2(value)}
          />
        ) : (
          <Label text={props.label2} fontWeight={700} fontSize={'16px'} />
        )}
        {props.label3 ? (
          <Label
            text={props.label3}
            fontWeight={500}
            fontSize={'14px'}
            lineHeight={'16px'}
          />
        ) : isDelete || isEdit ? (
          <Row>
            <Link
              label={cancel}
              onClick={() => {
                setIsDelete(false);
                setIsEdit(false);
                if (isDelete) props.onCancel();
                if (isEdit) props.onCancel();
              }}
            />
            <Link
              color="red"
              label={confirm}
              onClick={() => {
                setIsDelete(false);
                setIsEdit(false);
                if (isDelete) props.onDelete();
                if (isEdit) props.onEdit();
              }}
            />
          </Row>
        ) : (
          <Link label={props.link} onClick={() => onClick()} />
        )}
      </Column>
    </Row>
  );
};

export default Card;
