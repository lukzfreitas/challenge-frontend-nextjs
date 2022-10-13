import { MessageErrorStyle } from "./styled"

interface MessageErrorProps {
    message: string;
}

export const MessageError = (props: MessageErrorProps) => {
    return (
        <MessageErrorStyle>{props.message}</MessageErrorStyle>
    )
}