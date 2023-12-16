import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductDetail from "../Pages/product-detail";
import AddListing from '../components/AddListing';
import Pay from '../components/Pay';



function RoutersConfig() {
    return (
        <Routes>
            <Route
                path='/:product/:id'
                element={<ProductDetail/>}
            />
            <Route
                path="/addlisting"
                element={<AddListing />}
            />
             <Route
                path="/pay"
                element={<Pay />}
            />
            <Route
                exact
                path="/"
                element={<Home />}
            />
        </Routes>
    );
}

export default RoutersConfig;