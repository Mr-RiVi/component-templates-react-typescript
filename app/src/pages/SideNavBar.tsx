import { FunctionComponent, PropsWithChildren, ReactElement } from "react";

import MuiSideNav from "../components/SideNavBars/MuiSideNav";

import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import MuiExpandableSidebar from "../components/SideNavBars/MuiExpandableSidebar";

interface SideNavBarPropsInterface { }

const SideNavBar: FunctionComponent<
  PropsWithChildren<SideNavBarPropsInterface>
> = (): ReactElement => {
  const navItems = [
    {
      icon: <ViewQuiltOutlinedIcon />,
      label: "Layouts",
      link: "/home/buttons",
    },
    {
      icon: <DraftsOutlinedIcon />,
      label: "Drafts",
      link: "/drafts",
    },
    {
      icon: <SendOutlinedIcon />,
      label: "Sent Items",
      link: "/home/sent",
    },
    {
      icon: <StarBorderOutlinedIcon />,
      label: "Starred",
      link: "/starred",
    },
    {
      icon: <DeleteOutlinedIcon />,
      label: "Trash",
      link: "/trash",
    },
    {
      icon: <ViewQuiltOutlinedIcon />,
      label: "Custom Section",
      subItems: [
        {
          icon: <StarBorderOutlinedIcon />,
          label: "Important",
          link: "/important",
        },
        {
          icon: <DeleteOutlinedIcon />,
          label: "Deleted",
          link: "/deleted",
        },
      ],
    },
  ];

  return (
    <>
      {/* <MuiSideNav items={navItems} /> */}
      <MuiExpandableSidebar items={navItems} />

    </>
  );
};

export default SideNavBar;
