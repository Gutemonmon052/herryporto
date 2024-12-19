import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BaseLayout } from "./components/baselayout.tsx";
import ProjectDet from "./pages/projectdet.tsx";


const routers = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/projects/:slug",
        element: <ProjectDet />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routers} />
);
