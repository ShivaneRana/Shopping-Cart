import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./Routes.jsx";

const route = createBrowserRouter(Routes);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}>
  </RouterProvider>
);
