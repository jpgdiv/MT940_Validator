import { ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import theme from "../theme";

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) =>
      BrowserRouter({
        children: ThemeProvider({ theme, children }),
      }),
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
