import React from "react";
import { Paper, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

import InstagramIcon from "@mui/icons-material/Instagram";
import { welcomeStyles } from "../Styles/welcomeStyles";

export default function Social() {

  const classes = welcomeStyles();
  return (
    <div>
      <Box className="flex-items-row" sx={{ gap: 3 }}>
        <Paper  elevation={1} sx={{ borderRadius: "9px",padding:'4px' }}>
          <FacebookIcon sx={{fontSize:{
            xs:'1.69rem',
            sm:'2.8rem'
          }}} />
        </Paper>
        <Paper elevation={1} sx={{ borderRadius: "9px",padding:'4px' }}>
          <InstagramIcon  sx={{fontSize:{
            xs:'1.69rem',
            sm:'2.8rem'
          }}}/>
        </Paper>
      </Box>
    </div>
  );
}
