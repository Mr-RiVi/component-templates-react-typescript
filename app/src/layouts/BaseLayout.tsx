import { FunctionComponent, PropsWithChildren, ReactElement } from "react";

import { Outlet } from "react-router-dom";

import SideNavBar from "../pages/SideNavBar";
import { Header } from "../components/Header/MuiHeader";
import { Toolbar } from "@mui/material";

import { drawerWidth } from "../components/SideNavBars/MuiExpandableSidebar";

interface BaseLayoutProps { }

export const BaseLayout: FunctionComponent<
  PropsWithChildren<BaseLayoutProps>
> = (): ReactElement => {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <Toolbar />
      <div className="content">
        <div className="side-navigation">
          <SideNavBar />
        </div>
        <main style={{ marginLeft: drawerWidth + 8 }} className="main-content">
          <Outlet />
        </main>
      </div>
      <div className="footer"></div>
    </div>
  );
};
