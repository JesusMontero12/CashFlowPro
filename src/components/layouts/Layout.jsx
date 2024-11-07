import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import HeaderContainer from "./header/HeaderContainer";

const Layout = () => {
  return (
    <>
      <HeaderContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
