import {Navbar} from './navbar';
import {Footer} from  './footer';
import {Outlet} from "react-router-dom";

export const BaseLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

