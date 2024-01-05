import React, {useState} from "react";
import List from "@mui/material/List";
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuItems from "./ListConfig";
import { Link, To } from "react-router-dom";
import { SyntheticEvent } from "react";
import './styles.css'

export default function VerticalCollapsibleSidebarOnHover() {
  const [menuItems, setMenuItems] = useState(MenuItems);
  const [shortMenu, setShortMenu] = useState(false)

  const handleClick = (e: SyntheticEvent<EventTarget>) => {
    console.log((e.target as HTMLElement));
    const clickedEl = (e.target as HTMLElement).innerText;
    const modifiedList = [...menuItems];
    // If there exists a children attribute, we expand
    // The clickedElementWithChildren element is the element that has been clicked and has an attribute called children
    const clickedElementWithChildren = modifiedList.find((el) => el.name === clickedEl && el.children)
    if(clickedElementWithChildren) {
      clickedElementWithChildren.open = !clickedElementWithChildren.open
      setMenuItems(modifiedList)
    }
    // Else navigate to a route, here we don't need to write explicit logic for that, just add Link

  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <MenuIcon
        sx={{ position: "relative", left: 0 }}
        onClick={() => setShortMenu(!shortMenu)}
      />
      {MenuItems.map((el) => (
        <>
          <Link to={el.url as To}>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>{el.icon}</ListItemIcon>
              <ListItemText
                primary={el.name}
                sx={{
                  color: "#fff",
                  display: shortMenu ? "none" : { xs: "none", sm: "block" },
                }}
              />
              {/* {el.children ? (
                el.open ? (
                  <ExpandLess sx={{ color: "#fff" }} />
                ) : (
                  <ExpandMore sx={{ color: "#fff" }} />
                )
              ) : null} */}
            </ListItemButton>
          </Link>
          {el.children ? (
            <Collapse in={el.open} timeout="auto" unmountOnExit>
              {el.children.map((innerEl) => (
                <Link to={innerEl.url}>
                  <List component="div" disablePadding>
                    <ListItemButton
                      sx={{ background: "#333333" }}
                    >
                      <ListItemIcon>{innerEl.icon}</ListItemIcon>
                      <ListItemText
                        primary={innerEl.name}
                        sx={{
                          color: "#fff",
                          display: shortMenu
                            ? "none"
                            : { xs: "none", sm: "block" },
                        }}
                      />
                    </ListItemButton>
                  </List>
                </Link>
              ))}
            </Collapse>
          ) : null}
        </>
      ))}
    </List>
  );
}
