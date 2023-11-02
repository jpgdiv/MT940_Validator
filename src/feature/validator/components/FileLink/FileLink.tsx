import { FC, PropsWithChildren } from "react";
import StyledAnchor from "./StyledAnchor";

const FileLink: FC<PropsWithChildren> = ({ children, ...props }) => {
  return <StyledAnchor {...props}>{children}</StyledAnchor>;
};

export default FileLink;
