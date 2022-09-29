import styled from "styled-components";
import { AlignItems, JustifyContent } from "../../../models/typesStyled";

interface PropsRow {
    alignItems?: AlignItems;
    justifyContent?: JustifyContent;
    height?: string;
    width?: string;
    padding?: string;
}

export const Row = styled.div<PropsRow>`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(p: PropsRow) => p.justifyContent};
    align-items: ${(p: PropsRow) => p.alignItems};
    height: ${(p: PropsRow) => p.height};
    width: ${(p: PropsRow) => p.width};
    padding: ${(p: PropsRow) => p.padding};
`