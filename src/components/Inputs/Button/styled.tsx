import styled from "styled-components";

interface PropsButtonStyle {
    type: 'primary' | 'secondary',
    disabled?: boolean,
    width?: string
}

export const ButtonStyle = styled.div((props: PropsButtonStyle) => ({    
    display: "flex",    
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    gap: "10px",
    width: props.width,
    height: "51px",
    left: "16px",
    top: "16px",    
    cursor: "pointer",
    border: props.type === "secondary" ? "1px solid #2A7AE4" : "none",    
    backgroundColor: props.type === "primary" ? "#2A7AE4" : "transparent",
    ":hover": {
        "transition": "all 0.2s ease-in-out",
        "backgroundColor": props.type === "primary" ? "#5595E9" : "#D4E4FA"
    }
}));

export const LabelStyle = styled.label((props: PropsButtonStyle) => ({
    color: props.type === "primary" ? "#FFFFFF" : "#2A7AE4",    
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    cursor: "pointer"
}));

