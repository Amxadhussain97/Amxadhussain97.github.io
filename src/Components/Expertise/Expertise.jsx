import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { expertiseStyles } from "./Styles/expertiseStyles";
import ECard from "./Card/ECard";

export default function Expertise() {
  const classes = expertiseStyles();

  const data = [
    {
      title: "Web Developing",
      bio: "I have experience in building responsive websites and web applications. I use React in frontend and Laravel in backend for the web development.",
    },
    {
      title: "Web Scraping",
      // define bio as I can scrap any websites using puppeter js
      bio: "I can scrap any websites using puppeter js",

    }
  ]

  return (
    <Box  sx={{ width: "100vw"}}>

<a className="anchor" id="whatido"></a>
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
        <Grid container spacing={2}>
          {data.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <ECard title={item.title} bio={item.bio} />
              </Grid>
            );
          })}
        </Grid>
        {/* <ECard /> */}
      </Box>
    </Box>
  );
}
