import { FunctionComponent, PropsWithChildren, ReactElement } from "react";

import { Outlet } from "react-router-dom";

import SideNavBar from "../pages/SideNavBar";

interface BaseLayoutProps {}

export const BaseLayout: FunctionComponent<
  PropsWithChildren<BaseLayoutProps>
> = (): ReactElement => {
  return (
    <section className="wrapper">
      <section className="header"></section>
      <section className="side-navigation">
        <SideNavBar />
      </section>
      <section className="content">
        <Outlet />
      </section>
      <section className="footer"></section>
    </section>
  );
};
