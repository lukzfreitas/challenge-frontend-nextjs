import { useState } from "react";
import { DragFileStyled, DragInputFileStyled, InputFileStyled, LabelStyled } from "./styled";

interface DragInputFileProps {
  label: string;
}

const DragInputFile = ({ label, ...props }: DragInputFileProps) => {

  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };

  return (
    <DragInputFileStyled onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <InputFileStyled type="file" multiple={true} />
      <LabelStyled dragActive={dragActive}>
        {label}
      </LabelStyled>
      {dragActive && <DragFileStyled onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} />}
    </DragInputFileStyled>
  )
}

export default DragInputFile;