import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { FileLink } from "../components/FileLink";
import LoadingButton from "../components/LoadingButton/LoadingButton";
import { RecordUploadButton } from "../components/RecordUploadButton";
import { TextBox } from "../components/TextBox";

export default function ValidatorForm({
  handleSubmit,
  isLoading,
  error,
}: {
  handleSubmit: (files: File[]) => void;
  isLoading: boolean;
  error: string | null;
}) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">New Validation</Typography>
      <Box sx={{ mt: 4 }}>
        <TextBox>Upload a .csv or .xml file in MT940 format.</TextBox>
      </Box>
      <Box sx={{ mt: 4 }}>
        <RecordUploadButton
          handleFile={(newFile) => {
            if (newFile === null) {
              return;
            }
            setFiles([...files, newFile]);
          }}
        >
          Upload Record
        </RecordUploadButton>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Box>
          <TextBox>Uploaded Record:</TextBox>
          {files.map((file) => (
            <FileLink key={file.name}>{file.name}</FileLink>
          ))}
        </Box>
        <Box sx={{ mt: 4 }}>
          <LoadingButton
            onClick={() => {
              handleSubmit(files);
            }}
            isLoading={isLoading}
            disabled={files.length === 0 || isLoading}
          >
            Validate Record
          </LoadingButton>
          {error !== null && <TextBox>{error}</TextBox>}
        </Box>
      </Box>
    </Box>
  );
}
