/* The navigation drawers (or "sidebars") provide ergonomic access to destinations
 in a site or app functionality such as switching accounts. */

import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

/**
 * The NavItem type defines the structure of an individual navigation item.
 * It includes properties like label (text for the link), link (URL for the link),
 * and subItems (optional array of nested navigation items). *
 */
type NavItem = {
  icon?: React.ReactNode;
  label: string;
  link?: string | undefined;
  subItems?: NavItem[];
};

/**
 * The NavBarProps type defines the props that the NavBar component expects.
 * It includes a property named items, which is an array of NavItem objects.
 */
type NavBarProps = {
  items: NavItem[];
};

/**
 * NavItem Component:
 * This component represents an individual navigation item.
 *
 * @param {NavItem} item - The data for the current navigation item.
 */
const NavItem: FunctionComponent<{ item: NavItem }> = ({ item }) => {
  const [open, setOpen] = React.useState(true);

  const handleItemClick = () => {
    setOpen(!open);
  };
  return (
    <List>
      <Link
        to={item.link ? (item.subItems ? "" : item.link) : ""}
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemButton onClick={handleItemClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
          {item.subItems && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      </Link>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <>
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
        </>
      </Collapse>
    </List>
  );
};

/**
 * NavBar Component:
 * This component represents a navigation bar that displays a list of items.
 *
 * @param {NavBarProps} items - The array of navigation items to be displayed.
 */
const NavBar: FunctionComponent<NavBarProps> = ({ items }: NavBarProps) => (
  <Drawer variant="permanent" anchor="left">
    <ul>
      {/* Map through the array of items and render a NavItem component for each */}
      {items.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </ul>
  </Drawer>
);

export default NavBar;
