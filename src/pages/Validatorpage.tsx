import { Container } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ValidatorForm, ValidatorIntro } from "../feature/validator";
import { usePostRecord } from "../feature/validator/api/postRecordhook";

export default function ValidatorPage() {
  const { postReqest, isPending, data, error, abortController } =
    usePostRecord();

  const navigate = useNavigate();

  useEffect(() => {
    if (data !== null) {
      navigate("/report");
    }

    return abortController.abort();
  }, [data, navigate, abortController]);

  useEffect(() => {
    if (error !== null) {
      console.log(`Implementing some error handling logic: ${error}`);
    }
  }, [error]);

  return (
    <Container sx={{ mt: 4 }}>
      <ValidatorIntro />
      <ValidatorForm
        isLoading={isPending}
        error={error}
        handleSubmit={(files) => {
          postReqest(files[0]);
        }}
      />
    </Container>
  );
}
