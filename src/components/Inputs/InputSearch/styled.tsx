import styled from "styled-components";


export const InputSearchStyled = styled.input`    
    height: 40px;    
    font-size: 16px; 
    border: transparent;            
    border-radius: 20px 0px 0px 20px;
    background-color: #F5F5F5;
    padding: 8px 16px;
    color: #A2A2A2;
    gap: 8px;    
    width: 393px;
    :focus {
        outline-color: transparent;            
        outline-width: 0;
    }
    ::placeholder {
        color: #A2A2A2;        
        font-size: 14px;
        line-height: 16px;
        font-weight: 400;
        font-style: normal;
    }
    @media (max-width: 1220px) {
        width: 272px;
    }
    @media (max-width: 1100px) {
        display: none;
    }
`;

export const FormControl = styled.div`
        display: flex;
        flex-direction: row;
        height: 40px;               
        border: 0;
        border-radius: 20px;  
        @media (max-width: 1100px) {
            display: none;
        }      
    `;

export const IconStyled = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;  
        padding: 20px;
        border-top-right-radius: 20px;    
        border-bottom-right-radius: 20px;    
        background-color: #F5F5F5;
        cursor: pointer;
        @media (max-width: 1100px) {
            display: none;
        }   
    `;