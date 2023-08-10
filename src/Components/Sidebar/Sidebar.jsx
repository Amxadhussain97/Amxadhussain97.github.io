import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Collapse, Typography, Box, Divider } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { menu } from "./menu";
import { hasChildren } from "./helperFunction";
import {  useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import styled from "@emotion/styled";
import Tamim from "../../assets/images/tamim.jpg";
import cv from "../../assets/pdf/cv.pdf"
import { navbarStyles } from "../Navbar/Styles/NavbarStyles";
import { Link, animateScroll as scroll } from "react-scroll";

export const CustomList = styled(ListItemButton)(({ theme }) => ({
  "& .MuiListItemText-primary": {
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
}));

function SideBarList() {
  return menu.map((item, key) => <MenuItem key={key} item={item} />);
}

const MenuItem = ({ item }) => {
  const location = useLocation();
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} location={location} />;
};

const SingleLevel = ({ item, location }) => {
  return (
    <Link to={item.path} smooth={true} duration={500}>
    <CustomList
    //   component={Link}
    //   to={item.path}
      selected={location?.pathname.includes(item.path)}
    >
      {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
      <ListItemText primary={item.title} />
    </CustomList>
    </Link>
  );
};

const SubLevel = ({ item, location }) => {
  return (
    <CustomList
      component={Link}
      to={item.path}
      selected={location.pathname.includes(item.path)}
    >
      {/* <ListItemIcon>{}</ListItemIcon> */}
      <ListItemText primary={item.title} />
    </CustomList>
  );
};
const MultiLevel = ({ item, location }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <CustomList
        // to={item.path}
        selected={location?.pathname.includes(item.path)}
        onClick={handleClick}
      >
        {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
        <ListItemText primary={item.title} />
        {open ? (
          <ArrowDropUpIcon sx={{ fontSize: 35 }} />
        ) : (
          <ArrowDropDownIcon sx={{ fontSize: 35 }} />
        )}
      </CustomList>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{}} component="div" disablePadding>
          {children.map((child, key) => (
            <SubLevel key={key} item={child} location={location} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default function Sidebar({
  container,
  mobileOpen,
  handleDrawerToggle,
  drawerWidth,
}) {
  const classes = navbarStyles();

  const handleDownload = () => {
    const pdfUrl = cv;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  console.log("mobile:", mobileOpen);
  const drawer = (
    <div>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 2,
      }}>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap:0.5
      }}>
      <img src={Tamim} className={classes.myImage} />
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "#646665",
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
            },
          }}
        >
          AHT
        </Typography>
      </Box>
     
      </Box>
      <Divider sx={{my:2}}/>

     
      {/* <Divider /> */}
      <SideBarList />
     
      <Box  className={classes.downloadCv}
 
          onClick={handleDownload}
        
      >
          {/* define download cv */}
          <Typography variant="subtitle2" sx={{
            // fontWeight:'bold',
            fontSize:'0.6rem'
          }}>DOWNLOAD CV</Typography>
        </Box>
    </div>
  );

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            // backgroundColor: "#76AE40",
            // give border top right and bottom right radious
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            height:'500px',
            mt:2
            

            // color: "#FFFFFF",
            // py: 1,
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#76AE40",
            color: "#FFFFFF",
            py: 1.5,
          },
        }}
        open
      >
        {drawer}
      </Drawer> */}
    </>
  );
}
