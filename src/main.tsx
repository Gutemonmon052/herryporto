import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Navbar } from "./components/navbar.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Footer } from "./components/footer.tsx";
import ProjectDet from "./pages/projectdet.tsx";

const BaseLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

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
