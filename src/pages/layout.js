import SideBar from "../components/sideBar/sideBar";
import { Outlet } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  const isAuthenticated = useIsAuthenticated();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    } else {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className=" flex">
      <SideBar />
      <div className="w-[calc(100%-18rem)] h-full flex items-center justify-center p-10 ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
