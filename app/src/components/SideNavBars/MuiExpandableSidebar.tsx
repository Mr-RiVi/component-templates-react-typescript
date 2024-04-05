/* The navigation drawers (or "sidebars") provide ergonomic access to destinations
 in a site or app functionality such as switching accounts. */

import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useTheme,
} from "@mui/material";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


export const drawerWidth = 212;

const themedStyles = () => {
  return {
    sidebar: {
      width: drawerWidth,
      "& .MuiBackdrop-root": {
        display: "none"
      },
      [`& .MuiDrawer-paper`]: { width: drawerWidth },

    }
  }
}

/**
 * The NavItemProps type defines the structure of an individual navigation item.
 * It includes properties icon, label (text for the link), link (URL for the link),
 * and subItems (optional array of nested navigation items). *
 */
type NavItemProps = {
  icon?: React.ReactNode;
  label: string;
  link?: string | undefined;
  subItems?: NavItemProps[];
};

/**
 * NavItem Component:
 * This component represents an individual navigation item.
 *
 * @param {NavItemProps} item - The data for the current navigation item.
 */
const NavItem: FunctionComponent<{ item: NavItemProps }> = ({ item }) => {
  const [openSubItems, setOpenSubItems] = React.useState(true);

  const handleItemClick = () => {
    setOpenSubItems(!openSubItems);
  };
  return (
    <List>
      {item.subItems ? (
        <>
          <ListItemButton onClick={handleItemClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
            {item.subItems && (!openSubItems ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
          <Collapse in={!openSubItems} timeout="auto" unmountOnExit>

            {item.subItems?.map((subItem) => (
              <List component="div" disablePadding>
                <Link
                  to={subItem.link || ""}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>{subItem.icon}</ListItemIcon>
                    <ListItemText primary={subItem.label} />
                  </ListItemButton>
                </Link>
              </List>
            ))}
          </Collapse>
        </>
      ) : (
        <Link
          to={item.link ? (item.subItems ? "" : item.link) : ""}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton onClick={handleItemClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
            {item.subItems && (!openSubItems ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </Link>
      )}
    </List>
  );
};

/**
 * The NavBarProps type defines the props that the NavBar component expects.
 * It includes a property named items, which is an array of NavItem objects.
 */
type NavBarProps = {
  items: NavItemProps[];
};

/**
 * NavBar Component:
 * This component represents a navigation bar that displays a list of items.
 *
 * @param {NavBarProps} items - The array of navigation items to be displayed.
 */
export default function MuiExpandableSidebar({ items }: NavBarProps) {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();

  const handleDrawerExpand = () => {
    setOpen(true);
  };

  return (
    <Drawer sx={{ ...themedStyles().sidebar }} variant="permanent" anchor="left">
      {/* used this toolbar comp to get space cz of appbar component */}
      <Toolbar />
      {/* <ul> */}
      {/* Map through the array of items and render a NavItem component for each */}
      {items.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}

      {/* Settings button */}
      <List>
        <Link
          to={"/settings"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton>
            <ListItemIcon>{<SettingsOutlinedIcon />}</ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItemButton>
        </Link>
      </List>

      {/* Expand and Collaps button */}
      <Divider />
      <List>
        <ListItemButton onClick={handleDrawerExpand}>
          <ListItemIcon>{<ArrowForwardIosOutlinedIcon />}</ListItemIcon>
          <ListItemText primary={"Expand"} />
        </ListItemButton>
      </List>
      {/* </ul> */}
    </Drawer>
  );
}
