import styled from "styled-components";

interface DragInputFileStyledProps {
    dragActive: boolean
}

export const DragInputFileStyled = styled.form`
        height: 150px;
        width: 100%;
        max-width: 100%;
        text-align: center;
        position: relative;
`

export const InputFileStyled = styled.input`
    display: none;
`

export const LabelStyled = styled.label<DragInputFileStyledProps>`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 1rem;
    border-style: dashed;
    border-color: #cbd5e1;
    background-color: ${(p: DragInputFileStyledProps) => p.dragActive ? "#faf4f8" : "#FFFFFF"};
    padding: 8px;
    color: #A2A2A2;
`

export const DragFileStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`