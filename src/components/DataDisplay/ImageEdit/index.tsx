import Image from 'next/image';
import DeleteIcon from '../Icons/Delete';
import EditIcon from '../Icons/Edit';

interface ImageEditProps {
  src: string;
  height: string;
  width: string;
  alt?: string;
  onEditEvent?: Function;
  onDeleteEvent?: Function;
}

const ImageEditComponent = (props: ImageEditProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'block' }}>
        <Image
          src={props.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
        />
      </div>
      <div style={{ position: 'absolute', top: 10, right: 50 }}>
        <DeleteIcon color="white" onClick={() => props.onDeleteEvent()} />
      </div>
      <div style={{ position: 'absolute', top: 10, right: 5 }}>
        <EditIcon color="white" onClick={() => props.onEditEvent()} />
      </div>
    </div>
  );
};

export default ImageEditComponent;
