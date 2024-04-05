import { FunctionComponent, PropsWithChildren, ReactElement } from "react";

import MuiSideNav from "../components/SideNavBars/MuiSideNav";

import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";

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
      icon: <DraftsIcon />,
      label: "Drafts",
      link: "/drafts",
    },
    {
      icon: <SendIcon />,
      label: "Sent Items",
      link: "/sent",
    },
    {
      icon: <StarIcon />,
      label: "Starred",
      link: "/starred",
    },
    {
      icon: <DeleteIcon />,
      label: "Trash",
      link: "/trash",
    },
    {
      icon: <ViewQuiltOutlinedIcon />, // You can reuse icons for variety
      label: "Custom Section",
      subItems: [
        {
          icon: <StarIcon />,
          label: "Important",
          link: "/important",
        },
        {
          icon: <DeleteIcon />,
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
