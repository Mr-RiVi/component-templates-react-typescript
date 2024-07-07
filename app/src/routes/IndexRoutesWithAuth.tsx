import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { SecureApp } from "@asgardeo/auth-react";

// import Home from "../pages/Home";
import SideNavBar from "../pages/SideNavBar";
import Table from "../pages/Table";
// import DropdownMenu from "../pages/DropdownMenu";
import Buttons from "../pages/Buttons";
import Cards from "../pages/Cards";
import Dialog from "../pages/Dialog";
import { BaseLayout } from "../layouts/BaseLayout";

import MiniDrawer from "../components/SideNavBars/tBar";
import { NotFoundPage } from "../pages/NotFound";
import { Loading } from "../pages/Loading";

const IndexRoutesWithAuth: React.FC = () => {
    return (
        <SecureApp fallback={<Loading />}>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/side-nav-bars" element={<SideNavBar />} />
                <Route path="/side" element={<MiniDrawer />} />
                <Route path="/sidenavex" element={<SideNavBar />} />
                <Route path="/tables" element={<Table />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/buttons" element={<Buttons />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/dialog" element={<Dialog />} />
                <Route path="/home" element={<BaseLayout />}>
                    <Route index element={<Navigate to="/home" />} />
                    <Route path="cards" element={<Cards />} />
                    <Route path="tables" element={<Table />} />
                    <Route path="buttons" element={<Buttons />} />
                    <Route path="sent" element={<Loading />} />
                </Route>
                <Route path="/loading" element={<Loading />} />
                <Route path="/NotFoundPage" element={<NotFoundPage />} />
            </Routes>
        </SecureApp>
    );
};

export default IndexRoutesWithAuth;
