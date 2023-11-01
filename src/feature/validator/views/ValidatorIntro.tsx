import { Box, Typography } from "@mui/material";
import { HorizontalRuler } from "../components/HorizontalRuler";
import { TextBox } from "../components/TextBox";

export default function ValidatorIntro() {
  return (
    <>
      <Typography variant="h4">Record Validator</Typography>
      <Box sx={{ mt: 4 }}>
        <TextBox>
          Tool to validate MT940 format customer records Validates records on
          transaction reference and balance.
        </TextBox>
      </Box>
      <HorizontalRuler />
    </>
  );
}
