import React from "react";
import { Box, Stack, Avatar, Typography, Divider,  IconButton,Card } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import WebhookIcon from "@mui/icons-material/Webhook";
import { navbarStyles } from "./Styles/NavbarStyles";
import MenuIcon from "@mui/icons-material/Menu";
import Tamim from "../../assets/images/tamim.jpg";

export default function Navbar() {
  const classes = navbarStyles();
  const navItems = ["What we do", "How we work", "Pricing", "Our Team"];
  return (
    <Box className={classes.navBar}>
      {/* <AppBar component="nav"> */}

      <Toolbar sx={{pt:1}}>
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
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#646665",
          fontSize:{
            xs:'1rem',
            sm:'1.5rem'

          }
           }}
        >
          AHT
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ mx: 2 }}>
              {item}
            </Button>
          ))}
        </Box>
        <Box>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{display: { sm: "none" } }}
          >
          <Card sx={{
            p:1.3,
            borderRadius:'18px',
            mr:-1
          }}
          className="flex-items-center"
          >
          <MenuIcon />
          </Card>
         
          </IconButton>
        </Box>
      </Toolbar>
      {/* </AppBar> */}
    </Box>
  );
}
