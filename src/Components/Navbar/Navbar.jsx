import React from "react";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  Divider,
  AppBar,
  IconButton,
  Card,
  Slide,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import WebhookIcon from "@mui/icons-material/Webhook";
import { navbarStyles } from "./Styles/NavbarStyles";
import MenuIcon from "@mui/icons-material/Menu";
import Tamim from "../../assets/images/tamim.jpg";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar({ handleDrawerToggle }) {
  const classes = navbarStyles();
  const trigger = useScrollTrigger();
  const navItems = [
    {
      name: "HOME",
      link: "home",
    },
    {
      name: "WHAT I DO",
      link: "whatido",
    },
    {
      name: "SKILLS",
      link: "skills",
    },
    {
      name: "PROJECTS",
      link: "projects",
    },
    {
      name: "PROBLEM SOLVING",
      link: "problemsolving",
    },
    {
      name: "RESEARCH",
      link: "research",
    },
    {
      name: "OTHERS",
      link: "others",
    },
    {
      name: "RECOMMENDATIONS",
      link: "recommendations",
    },
  ];

  console.log("trigger ",trigger)
  return (
    <Box className={classes.navBar}>
      {/* <AppBar component="nav"> */}
   
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#fff",
            pb:2,
            // give boxshadow none
            boxShadow: "none",
            // give boxshadow if trigger
            boxShadow: trigger ? "0px 0px 15px 0px #0000001a" : "none",
           
          }}
        >
           {/* <Slide in={!trigger}> */}
          <Toolbar sx={{ pt: 1.2,}}>
            {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}

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

          
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link to={item?.link} smooth={true} duration={500}>
                <a key={item} href={item?.link} className={classes.navItem}>
                  {item?.name}
                </a>
                </Link>
              ))}
            </Box>
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <Card
                  sx={{
                    p: 1.3,
                    borderRadius: "18px",
                    mr: -1,
                  }}
                  className="flex-items-center"
                >
                  <MenuIcon />
                </Card>
              </IconButton>
            </Box>
          </Toolbar>
          {/* </Slide> */}
        </AppBar>
      
    </Box>
  );
}
