import { Button, ButtonProps } from "@mui/material";
import { PropsWithChildren } from "react";
import theme from "../../../../theme";
import { CircleSpinner } from "../Spinner";

type LoadingButtonProps = PropsWithChildren<
  {
    isLoading: boolean;
  } & ButtonProps
>;

const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  isLoading,
  ...props
}) => (
  <Button
    {...props}
    startIcon={CircleSpinner({
      show: isLoading,
      size: 25,
      borderColor: theme.palette.secondary.contrastText,
    })}
    variant="contained"
  >
    {children}
  </Button>
);

export default LoadingButton;
