import { useState } from 'react';
import { InputLabelStyle } from './styled';

export interface LabelProps {
  value: string;
  autoFocus?: boolean;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  textAlign?: string;
  maxWidth?: string;
  onChange?: Function;
}

const InputLabel = ({
  autoFocus = false,
  fontWeight = 500,
  lineHeight = '16px',
  fontSize = '14px',
  color = '#464646',
  maxWidth = '300px',
  onChange = () => {},
  ...props
}: LabelProps) => {
  const [value, setValue] = useState(props.value);

  const handleChangeValue = (event: any) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <InputLabelStyle
      autoFocus={autoFocus}
      maxWidth={maxWidth}
      value={value}
      onChange={(value) => handleChangeValue(value)}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      textAlign={props.textAlign}
    ></InputLabelStyle>
  );
};

export default InputLabel;
