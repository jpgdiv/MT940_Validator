import { createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: blue[900],
    },
  },
});

export default theme;
