import { EditIconStyled } from "./styled";

interface DeleteIconProps {
  onClick?: Function;
  viewBox?: string;
  color?: string;
  width?: string;
  height?: string;
}

const EditIcon = ({
  onClick = () => {},
  viewBox = '0 0 24, 24',
  color = 'red',
  height = '24px',
  width = '24px',
  ..._
}: DeleteIconProps) => {
  return (
    <EditIconStyled
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClick()}
    >
      <g clip-path="url(#clip0_55_1530)">
        <path
          d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_55_1530">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </EditIconStyled>
  );
};

export default EditIcon;
