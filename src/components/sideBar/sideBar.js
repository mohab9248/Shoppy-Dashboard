import { NavLink } from "react-router-dom";
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from "react-router-dom";

function SideBar() {
    const signOut = useSignOut()
    const navigate =useNavigate()
    const links = [
        {
            name: "dashboard",
            path: "/dashboard",
        },
        {
            name: "admins",
            path: "/admin",
        },
        {
            name: "users",
            path: "/user",
        },
        {
            name: "products",
            path: "/product",
        },
        {
            name: "categories",
            path: "/category",
        },
        {
            name: "orders",
            path: "/order",
        },
    ];

    return (
        <div className=" w-72 bg-primary h-screen flex items-center justify-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex-col">
            <div className=" h-1/2  w-[90%] flex flex-col justify-around ">
                {links.map((link, index) => (
                    <NavLink
                        key={index}
                        className={({ isActive }) =>
                            isActive
                                ? ` p-2 py-4  transition-all text-yellow-900 font-bold uppercase text-2xl  border-r-2 border-yellow-900`
                                : `p-2 py-4  text-white font-bold uppercase text-2xl  `
                        }
                        to={link.path}
                    >
                        {" "}
                        {link.name}
                    </NavLink>
                ))}
            </div>
            <div className="h-[15%] flex items-end justify-center  ">
                <button  onClick={() => {signOut() ; navigate("/")}} className=" p-2 text-[#f5f5f5f5] rounded-lg border-2 border-white">
                    {" "}
                    Log out{" "}
                </button>
            </div>
        </div>
    );
}

export default SideBar;
    