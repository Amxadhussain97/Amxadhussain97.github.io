import React from "react";
import { Paper, Box,Avatar } from "@mui/material";
import reactIMG from "../../../assets/images/react.png"
import laravelIMG from "../../../assets/images/laravel.png"
import liIMG from "../../../assets/images/linkedin.png"
import indIMG from "../../../assets/images/indeed.png"
import { welcomeStyles } from "../Styles/welcomeStyles";

export default function Social() {

  const classes = welcomeStyles();
  return (
    <div>
     <Box className="flex-items-row" sx={{gap:3}}>
            <Paper elevation={1} sx={{borderRadius:'9px', cursor:'pointer'
            }}
            onClick={()=>window.open("https://www.linkedin.com/in/amzad-tamim-414a68201/", "_blank")}
             >
                <Avatar src={liIMG} alt="react" className={classes.skillImg} />
            </Paper>
            
            <Paper elevation={1} sx={{borderRadius:'9px',cursor:'pointer'}} 
              onClick={()=>window.open("https://www.linkedin.com/in/amzad-tamim-414a68201/", "_blank")}
            >
                <Avatar src={indIMG} alt="react" className={classes.skillImg} />
            </Paper>
    </Box>
    </div>
  );
}
