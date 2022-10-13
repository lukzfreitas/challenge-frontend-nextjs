import styled from "styled-components";

export const MessageErrorStyle = styled.div`
    padding: 2px;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    animation: slow 2s;
    animation-fill-mode: forwards;
    color: rgb(187, 57, 57);
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;    
    @keyframes slow {
    from {
        max-height: 0px;
    }
    to {
        max-height: 20px;
    }
}
`