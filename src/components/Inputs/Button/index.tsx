import { ButtonStyled, LabelStyled } from './styled';

interface ButtonProps {

    disabled?: boolean;    

    type?: 'primary' | 'secondary';

    width?: string;

    label: string;

    onClick?: () => void;
}

const Button = ({
    disabled = false,
    type = "primary",    
    width = "130px",    
    label,
    onClick = () => {},
    ...props
}: ButtonProps) => {

    const handleClick = () => {
        if (disabled) return;
        onClick();
    }

    return (
        <ButtonStyled
            onClick={() => handleClick()}
            disabled={disabled}
            type={type}
            width={width}
        >
            <LabelStyled type={type}>
                {label}
            </LabelStyled>            
        </ButtonStyled>
    );
};

export default Button;
