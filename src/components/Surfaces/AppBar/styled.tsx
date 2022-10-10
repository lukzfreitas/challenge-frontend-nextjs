import styled from "styled-components";
import { JustifyContent } from "../../../models/typesStyled";

interface AppBarStyledProps {
    justifyContent?: JustifyContent;
    padding?: string;
    paddingMobile?: string;
}

export const AppBarStyled = styled.div<AppBarStyledProps>`
    display: "flex";
    flex-direction: column;
    flex: "1 1 50%";
    @media (max-width: 700px) {
        flex: "1 1 33%";
        padding: 0px;
    }
    justify-content: ${(p: AppBarStyledProps) => p.justifyContent};
    padding: ${(p: AppBarStyledProps) => p.padding};
`

export const IconStyled = styled.div`
    @media (min-width: 1100px) {
        display: none;
    }   
`