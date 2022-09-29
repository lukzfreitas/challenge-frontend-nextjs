import styled from "styled-components";

interface PropsRow {
    alignItems?: string;
    justifyContent?: string;
    height?: string;
    width?: string;
    padding?: string;
}

interface PropsCol {
    justifyContent?: string;
    alignItems?: string;    
    padding?: string;    
    nCols?: number;
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

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const Col1 = styled.div<PropsCol>`
    display: "flex";
    flex-direction: column;
    flex: "1 1 100%";
    justify-content: ${(p: PropsCol) => p.justifyContent};
    padding: ${(p: PropsCol) => p.padding};
`

export const Col2 = styled.div<PropsCol>`
    display: "flex";
    flex-direction: column;
    flex: "1 1 50%";
    justify-content: ${(p: PropsCol) => p.justifyContent};
    padding: ${(p: PropsCol) => p.padding};
`

export const Col3 = styled.div<PropsCol>`
    display: "flex";
    flex-direction: column;
    flex: "1 1 33%";
    justify-content: ${(p: PropsCol) => p.justifyContent};    
    padding: ${(p: PropsCol) => p.padding};
`

export const Col4 = styled.div<PropsCol>`
    display: "flex";
    flex-direction: column;
    flex: "1 1 25%";
    justify-content: ${(p: PropsCol) => p.justifyContent};    
    padding: ${(p: PropsCol) => p.padding};
`

export const Col5 = styled.div<PropsCol>`
    display: "flex";
    flex-direction: column;
    flex: "1 1 20%";
    justify-content: ${(p: PropsCol) => p.justifyContent};    
    padding: ${(p: PropsCol) => p.padding};
`

export const ColN = styled.div<PropsCol>`
    display: "flex";
    flex-direction: column;
    flex: ${(p: PropsCol) => `1 1 ${100 / p.nCols}%`};
    justify-content: ${(p: PropsCol) => p.justifyContent};    
    padding: ${(p: PropsCol) => p.padding};
`