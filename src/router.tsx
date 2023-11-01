import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <>error page</>,
    children: [],
  },
];
export const router = createBrowserRouter(routes);
