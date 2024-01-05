import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import React, { useState } from "react";
import { Mail, Notifications } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
// import { SwitchModeButton } from "../../SwitchModeButton";
// import { useUserContext } from "../../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const HorizontalAppBar = () => {
  const [open, setOpen] = useState(false);
  // const { user, updateUser } = useUserContext();
  const navigate = useNavigate();

  // const handleChange = () => {
  //   updateUser("loggedIn", false);
  //   console.log("USER", user);
  //   navigate("login");
  // };

  return (
    <AppBar sx={{ position: "sticky" }}>
      <StyledToolBar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          PandaTec
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search...." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}
            onClick={(e) => {
              setOpen(true);
            }}
          >
            N
          </Avatar>
          {/* <SwitchModeButton /> */}
        </Icons>
        <Userbox>
          <Avatar
            sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}
            onClick={(e) => {
              setOpen(true);
            }}
          >
            N
          </Avatar>
        </Userbox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem 
        // onClick={handleChange}
        >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default HorizontalAppBar;
