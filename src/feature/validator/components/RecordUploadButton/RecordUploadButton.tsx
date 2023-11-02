import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";

import { ChangeEvent, PropsWithChildren, useRef } from "react";
import { VisuallyHiddenInput } from "./VisuallyHiddenInput";

export default function RecordUploadButton({
  handleFile,
  children,
}: PropsWithChildren<{
  handleFile: (file: File | null) => void;
}>) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files === null) {
      return;
    }
    handleFile(files[0]);
  };

  return (
    <>
      <Button
        component="label"
        variant="contained"
        color="primary"
        startIcon={<CloudUploadIcon />}
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        {children}
      </Button>
      <VisuallyHiddenInput
        data-testid="visuallyhiddeninput"
        onChange={handleChange}
        ref={inputRef}
        type="file"
        accept="text/csv, text/xml"
      />
    </>
  );
}
