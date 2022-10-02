import { createGlobalStyle } from "styled-components";

export const GlobalStyyled = createGlobalStyle`    
    body {
        padding: 0;
        margin: 0;        
        font-family: 'Raleway', sans-serif;   
    }    
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: white;
        }
        body {
            color: white;
            background: white;
        }
    }
`





// export const Col1 = styled.div<PropsCol>`
//     display: "flex";
//     flex-direction: column;
//     flex: "1 1 100%";
//     justify-content: ${(p: PropsCol) => p.justifyContent};
//     padding: ${(p: PropsCol) => p.padding};
// `

// export const Col2 = styled.div<PropsCol>`
//     display: "flex";
//     flex-direction: column;
//     flex: "1 1 50%";
//     justify-content: ${(p: PropsCol) => p.justifyContent};
//     padding: ${(p: PropsCol) => p.padding};
// `

// export const Col3 = styled.div<PropsCol>`
//     display: "flex";
//     flex-direction: column;
//     flex: "1 1 33%";
//     justify-content: ${(p: PropsCol) => p.justifyContent};
//     padding: ${(p: PropsCol) => p.padding};
// `

// export const Col4 = styled.div<PropsCol>`
//     display: "flex";
//     flex-direction: column;
//     flex: "1 1 25%";
//     justify-content: ${(p: PropsCol) => p.justifyContent};
//     padding: ${(p: PropsCol) => p.padding};
// `

// export const Col5 = styled.div<PropsCol>`
//     display: "flex";
//     flex-direction: column;
//     flex: "1 1 20%";
//     justify-content: ${(p: PropsCol) => p.justifyContent};
//     padding: ${(p: PropsCol) => p.padding};
// `

// export const ColN = styled.div<PropsCol>`
//     display: "flex";
//     flex-direction: column;
//     flex: ${(p: PropsCol) => `1 1 ${100 / p.nCols}%`};
//     justify-content: ${(p: PropsCol) => p.justifyContent};
//     padding: ${(p: PropsCol) => p.padding};
// `
