import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../components/Pages/Home";
import ItemProduct from "../components/Pages/Item-product";

import Login from "../components/Login";

function RoutersConfig() {
    return (
        <Routes>
            <Route
                path='/login'
                element={<Login />}
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