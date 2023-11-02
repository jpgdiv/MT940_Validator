import { LinkProps, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { FC } from "react";
import theme from "../../theme";

const Link: FC<LinkProps> = (props) => {
  return (
    <MuiLink
      data-testid="navlink"
      {...props}
      underline="none"
      component={RouterLink}
      to={props.href ?? "#"}
      color={theme.palette.secondary.contrastText}
    />
  );
};

export default Link;
