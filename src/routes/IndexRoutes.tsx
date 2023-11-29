import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import SideNavBar from "../Pages/SideNavBar";
import Table from "../Pages/Table";
import DropdownMenu from "../Pages/DropdownMenu";

const IndexRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/side-nav-bars" element={<SideNavBar />} />
      <Route path="/tables" element={<Table />} />
      <Route path="/dropdowns" element={<DropdownMenu />} />
    </Routes>
  );
};

export default IndexRoutes;
