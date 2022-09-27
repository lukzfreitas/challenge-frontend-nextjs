import styled from "styled-components";

export const ButtonStyle = styled.div((props: { disabled: boolean, type: 'primary' | 'secondary' }) => ({
    display: "flex",    
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    gap: "10px",
    width: "72px",
    height: "51px",
    left: "16px",
    top: "16px",    
    cursor: "pointer",
    border: props.type === "secondary" ? "1px solid #2A7AE4" : "none",    
    backgroundColor: props.type === "primary" ? "#2A7AE4" : "transparent",
    ":hover": {
        "backgroundColor": props.type === "primary" ? "#5595E9" : "#D4E4FA"
    }
}));

export const LabelStyle = styled.label((props: {type: 'primary' | 'secondary'}) => ({
    color: props.type === "primary" ? "#FFFFFF" : "#2A7AE4",
    width: "40px",
    height: "19px",    
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    cursor: "pointer"
}));

