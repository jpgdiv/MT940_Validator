import { ThemeProvider } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import theme from "./theme.ts";

async function deferRender() {
  if (
    import.meta.env.MODE !== "development" ||
    !(import.meta.env.VITE_USE_MSW === "enabled")
  ) {
    return;
  }

  const { worker } = await import("./mocks/browser.ts");

  return worker.start();
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>,
  );
});
