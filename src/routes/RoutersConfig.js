import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../components/Pages/Home";
import ItemProduct from "../components/Pages/Item-product";
import Login from "../components/Login";
import AddListing from '../components/AddNew/AddListing';

function RoutersConfig() {
    return (
        <Routes>
            <Route
                path='/login'
                element={<Login />}
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