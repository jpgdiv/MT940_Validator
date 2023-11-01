import { LinkProps, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { FC } from "react";

const Link: FC<LinkProps> = (props) => {
  return <MuiLink {...props} component={RouterLink} to={props.href ?? "#"} />;
};

export default Link;
