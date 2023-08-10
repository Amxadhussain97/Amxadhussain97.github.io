import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Welcome from "../../Components/Welcome/Welcome";
import { homeStyles } from "./Styles/homeStyle";
import { Box, Typography } from "@mui/material";
import Expertise from "../../Components/Expertise/Expertise";
import Projects from "../../Components/Projects/Projects";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Resume from "../../Components/Resume/Resume";
import Skills from "../../Components/Skills/Skills";
import ProblemSolving from "../../Components/ProblemSolving/ProblemSolving";
import Research from "../../Components/Research/Research";
import cv from "../../../src/assets/pdf/cv.pdf";
import Footer from "../../Components/Footer/Footer";
import Dialogue from "../../Components/Dialogue/Dialogue";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Element } from "react-scroll";

export default function Home(props) {
  const classes = homeStyles();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { window } = props;
  const drawerWidth = 250;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDownload = () => {
    const pdfUrl = cv;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="full-width">
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar
          container={container}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
        />
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      </Box>
      <Box className={classes.container}>
        <Box
          className={classes.downloadCv}
          onClick={handleDownload}
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          {/* define download cv */}
          <Typography
            variant="subtitle2"
            sx={{
              // fontWeight:'bold',
              fontSize: "0.8rem",
            }}
          >
            DOWNLOAD CV
          </Typography>
        </Box>
        <Element name="home">
          <Welcome />
        </Element>
        <Element name="whatido">
          <Expertise />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>

        <Element name="projects">
        <Projects />
        </Element>

        <Element name="problemsolving">
        <ProblemSolving />
        </Element>

        <Element name="research">
        <Research />
        </Element>

        <Element name="others">
        <Resume />
        </Element>

        <Element name="recommendations">
        <Testimonial />
        </Element>

        <Footer />

        <Dialogue
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </Box>
    </div>
  );
}
