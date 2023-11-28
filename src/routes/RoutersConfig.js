import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../components/Pages/Home";
import ProductDetail from "../components/Pages/product-detail";
import AddListing from '../components/AddListing';



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
                exact
                path="/"
                element={<Home />}
            />
        </Routes>
    );
}

export default RoutersConfig;