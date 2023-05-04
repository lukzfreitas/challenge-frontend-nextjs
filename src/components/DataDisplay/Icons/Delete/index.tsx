import { DeleteIconStyled } from './styled';

interface DeleteIconProps {
  onClick?: Function;
  viewBox?: string;
  color?: string;
  width?: string;
  height?: string; 
}

const DeleteIcon = ({
  onClick = () => {},
  viewBox = '0 0 24, 24',  
  color = 'red',
  height = '24px',
  width = '24px',
  ..._
}: DeleteIconProps) => {
  return (
    <DeleteIconStyled
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick()}
    >
      <g clipPath="url(#clip0_160_310)">
        <path
          d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_160_310">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>      
    </DeleteIconStyled>
  );
};

export default DeleteIcon;
