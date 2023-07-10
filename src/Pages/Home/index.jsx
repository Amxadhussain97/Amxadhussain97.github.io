import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Welcome from "../../Components/Welcome/Welcome";
import { homeStyles } from "./Styles/homeStyle";
import { Box } from "@mui/material";
import Expertise from "../../Components/Expertise/Expertise";
import Projects from "../../Components/Projects/Projects";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Resume from "../../Components/Resume/Resume";
import Skills from "../../Components/Skills/Skills";
import ProblemSolving from "../../Components/ProblemSolving/ProblemSolving";
import Research from "../../Components/Research/Research";

export default function Home() {
  const classes = homeStyles();

  return (
    <div className="full-width" >
      <Navbar />
      <Box className={classes.container} >
        <Welcome />
        <Expertise />
        <Skills/>
        <Projects/>
      
        <ProblemSolving/>
        <Research/>
        <Resume/>
        <Testimonial/>
      </Box>
    </div>
  );
}
