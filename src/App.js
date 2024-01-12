import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Order from "./pages/Order/Order";
import Product from "./pages/Product/Product";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Category from "./pages/category/Category";
import Users from "./pages/user/Users";


function App() {
    return (

            <BrowserRouter>
                <Routes>
                    <Route  index element={<Login/>} />
                    <Route path="/" element={<Layout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="order" element={<Order />} />
                        <Route path="product" element={<Product />} />
                        <Route path="admin" element={<Admin />} />
                        <Route path="user" element={<Users/>} />
                        <Route path="category" element={<Category />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
