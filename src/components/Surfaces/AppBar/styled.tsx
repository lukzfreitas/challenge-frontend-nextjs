import styled from "styled-components";
import { JustifyContent } from "../../../models/typesStyled";

interface AppBarStyledProps {    
    justifyContent?: JustifyContent;
    padding?: string;
}

export const AppBarStyled = styled.div<AppBarStyledProps>`
    display: "flex";
    flex-direction: column;
    flex: "1 1 50%";
    justify-content: ${(p: AppBarStyledProps) => p.justifyContent};
    padding: ${(p: AppBarStyledProps) => p.padding};
`