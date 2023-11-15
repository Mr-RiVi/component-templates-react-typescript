import { FunctionComponent, PropsWithChildren, ReactElement } from "react";

import MuiSideNav from "../components/SideNavBars/MuiSideNav";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";

interface SideNavBarPropsInterface {}

const SideNavBar: FunctionComponent<
  PropsWithChildren<SideNavBarPropsInterface>
> = (): ReactElement => {
  const navItems = [
    {
      icon: <InboxIcon />,
      label: "Inbox",
      link: "/inbox",
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
      icon: <InboxIcon />, // You can reuse icons for variety
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
      <MuiSideNav items={navItems} />
    </>
  );
};

export default SideNavBar;
