import { Container } from "@mui/material";
import { ValidatorForm, ValidatorIntro } from "../feature/validator";

export default function ValidatorPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <ValidatorIntro />
      <ValidatorForm
        handleSubmit={(files) => {
          console.log(files[0]);
        }}
      />
    </Container>
  );
}
