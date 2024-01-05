import { AccountBox, Delete, Details, Home, Logout, Settings, Science, ListAltSharp, InfoOutlined } from "@mui/icons-material";

const styles = {
  iconCOntainer: {
    background: "#0C66E4",
    padding: "2px",
    width: 35,
    height: 35,
    borderRadius: 2,
  },
};
const MenuItems = [
  {
    name: "Home",
    icon: <Home sx={styles.iconCOntainer}  />,
    url: "/home",
  },
  {
    name: "Account",
    icon: <AccountBox sx={styles.iconCOntainer} />,
    open: true,
    children: [
      {
        name: "Account Details",
        icon: <Details sx={styles.iconCOntainer}  />,
        url: "/account-details",
      },
      {
        name: "Delete Account",
        icon: <Delete sx={styles.iconCOntainer}  />,
        url: "/delete-account",
      },
    ],
  },
  {
    name: "Settings",
    icon: <Settings sx={styles.iconCOntainer}  />,
    url: "/settings",
  },
  {
    name: "Logout",
    icon: <Logout sx={styles.iconCOntainer}  />,
    url: "/logout",
  },
  {
    name: "Projects",
    icon: <ListAltSharp sx={styles.iconCOntainer}  />,
    url: "/projects",
  },
  {
    name: "About",
    icon: <InfoOutlined sx={styles.iconCOntainer}  />,
    url: "/about",
  },
  {
    name: "Experiments",
    icon: <Science sx={styles.iconCOntainer}  />,
    url: "/experiments",
  },
];

export default MenuItems