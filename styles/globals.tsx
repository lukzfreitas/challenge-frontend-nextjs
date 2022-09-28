import styled from "styled-components";


interface PropsRow {
    alignItems?: string;
    justifyContent?: string;
    height?: string;
    padding?: string;
}

interface PropsCol {
    align?: string;
    padding?: string;
}

export const Row = styled.div<PropsRow>`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(p: PropsRow) => p.justifyContent};
    align-items: ${(p: PropsRow) => p.alignItems};
    height: ${(p: PropsRow) => p.height};    
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
    justify-content: ${(p: PropsCol) => p.align};
    padding: ${(p: PropsCol) => p.padding};
`

export const Col2 = styled.div<PropsCol>`
    display: "flex";
    flex-direction: column;
    flex: "1 1 50%";
    justify-content: ${(p: PropsCol) => p.align};
    padding: ${(p: PropsCol) => p.padding};
`

export const Col3 = styled.div<PropsCol>`
    display: "flex";
    flex-direction: column;
    flex: "1 1 33%";
    justify-content: ${(p: PropsCol) => p.align};    
    padding: ${(p: PropsCol) => p.padding};
`