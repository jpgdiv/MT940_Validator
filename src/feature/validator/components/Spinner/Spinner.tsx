import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../../../theme";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerStyled = styled.div(
  ({
    borderWidth,
    borderColor,
    size,
    speed,
    show,
  }: {
    borderWidth: number;
    borderColor: string;
    size: number;
    speed: number;
    show: boolean;
  }) => {
    return css`
      border-radius: 50%;
      border-top: ${borderWidth}px solid ${borderColor};
      border-right: ${borderWidth}px solid ${borderColor};
      border-bottom: ${borderWidth}px solid ${borderColor};
      border-left: ${borderWidth}px solid transparent;
      width: ${size}px;
      height: ${size}px;
      animation: ${spin} ${speed}s infinite cubic-bezier(0.4, 0.5, 0.6, 0.5) !important;
      transform-origin: center;
      display: ${show ? "block" : "none"};
    `;
  },
);

type SpinnerProps = {
  show?: boolean;
  speed?: number; // in seconds
  size?: number; // in pixels
  borderWidth?: number; // in pixels
  borderColor?: string;
};

const CircleSpinner: React.FC<SpinnerProps> = ({
  show = false,
  speed = 1,
  size = 40,
  borderWidth = 4,
  borderColor = theme.palette.grey[500],
}) => (
  <SpinnerStyled
    show={show}
    speed={speed}
    size={size}
    borderWidth={borderWidth}
    borderColor={borderColor}
  />
);

export default CircleSpinner;
