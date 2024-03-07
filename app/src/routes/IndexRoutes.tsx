import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import SideNavBar from "../pages/SideNavBar";
import Table from "../pages/Table";
import DropdownMenu from "../pages/DropdownMenu";
import Buttons from "../pages/Buttons";
import Cards from "../pages/Cards";
import Dialog from "../pages/Dialog";
import { BaseLayout } from "../layouts/BaseLayout";

const IndexRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/side-nav-bars" element={<SideNavBar />} />
      <Route path="/tables" element={<Table />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/buttons" element={<Buttons />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/dialog" element={<Dialog />} />
      <Route path="/layout" element={<BaseLayout />}>
        <Route index element={<Navigate to="/layout" />} />
        <Route path="cards" element={<Cards />} />
        <Route path="tables" element={<Table />} />
      </Route>
    </Routes>
  );
};

export default IndexRoutes;