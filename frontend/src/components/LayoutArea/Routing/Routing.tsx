import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { About } from "../../AboutArea/About/About";
import { Page404 } from "../page404/page404";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/products" element={<ProductList/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/add-product" element={<AddProduct/>} />
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
