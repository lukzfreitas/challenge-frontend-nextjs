import { ButtonStyle, LabelStyle } from './styled';

interface ButtonProps {

    disabled?: boolean;    

    type?: 'primary' | 'secondary';

    width?: string;

    label: string;

    onClick?: () => void;
}

const Button = ({
    disabled = false,
    type = 'primary',    
    width = '100%',
    label,
    ...props
}: ButtonProps) => {

    const handleClick = () => {
        if (disabled) return;
        props.onClick;
    }

    return (
        <ButtonStyle
            onClick={() => handleClick()}
            disabled={disabled}
            type={type}
            width={width}
        >
            <LabelStyle type={type}>
                {label}
            </LabelStyle>            
        </ButtonStyle>
    );
};

export default Button;
