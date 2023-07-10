import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { expertiseStyles } from "./Styles/expertiseStyles";
import ECard from "./Card/ECard";

export default function Expertise() {
  const classes = expertiseStyles();

  return (
    <Box  sx={{ width: "100vw"}}>
      <Box className={classes.expertiseHead} sx={{   px:"12%"}}>
        <Typography
          variant="overline"
          display="block"
          color="primary"
          gutterBottom
          sx={{
            fontSize: "14px",
            letterSpacing: "0.2rem",
          }}
          className="section-title"
        >
          Expertise
        </Typography>

        <Typography
          variant="h3"
          gutterBottom
          // make font weight bold
      
          className="section-tag"
        >
          What I Do
        </Typography>
      </Box>
      <Box
        sx={{
         background: "#F8F7F1",
         py:4,
         px:"7%"
          
        
        }}
      >
        <ECard />
      </Box>
    </Box>
  );
}
