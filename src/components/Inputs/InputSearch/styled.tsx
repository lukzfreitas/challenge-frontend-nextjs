import styled from "styled-components";

interface PropsSearchInput {
    width?: string;
}

export const InputStyle = styled.input<PropsSearchInput>`    
    height: 40px;    
    font-size: 16px; 
    border: transparent;            
    border-radius: 20px 0px 0px 20px;
    background-color: #F5F5F5;
    padding: 8px 16px;
    color: #A2A2A2;
    gap: 8px;
    width: ${(p: PropsSearchInput) => p.width};
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
`;

export const FormControl = styled.div`
        display: flex;
        flex-direction: row;
        height: 40px;               
        border: 0;
        border-radius: 20px;        
    `;

export const Icon = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;  
        padding: 20px;
        border-top-right-radius: 20px;    
        border-bottom-right-radius: 20px;    
        background-color: #F5F5F5;
        cursor: pointer;
    `;