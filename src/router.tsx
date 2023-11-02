import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ValidatorPage from "./pages/Validatorpage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ValidatorPage />,
      },
      {
        path: "/report",
        element: <>TODO implement Report page</>,
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
