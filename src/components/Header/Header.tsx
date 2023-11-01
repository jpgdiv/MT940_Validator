import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { PropsWithChildren } from "react";

export default function Header({ children }: PropsWithChildren) {
  return (
    <Box sx={{ flexGrow: 1 }} data-testid="headerbar">
      <AppBar position="static" color="secondary">
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Box>
  );
}
