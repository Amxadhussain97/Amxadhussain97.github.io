import React from "react";
import {
  Box,
  Typography,
  Stack,
  Paper,
  Card,
  Chip,
  IconButton,
} from "@mui/material";
import { useProjectStyles } from "./Styles/projectsStyles";
import PublicIcon from "@mui/icons-material/Public";
import LockIcon from "@mui/icons-material/Lock";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ekcupchaIMG from "../../assets/images/projects/ekcupcha/ekcupcha.png";
import madrasaIMG from "../../assets/images/projects/madrasa/madrasaone.png";
import hecclIMG from "../../assets/images/projects/heccl/hecclone.png";
import amaderlabMG from "../../assets/images/projects/amaderlab/amaderlab.png";

export default function Projects() {
  const classes = useProjectStyles();

  let items = [
    {
      name: "Ek Cup Cha",
      description:
        "A website for the content creators to get money from their followers.",
      tech: ["React","Laravel", "Redux", "Material UI"],
      link: "http://ekcupcha.com/",
      img: ekcupchaIMG,
      type:"Public"
    },
    {
      name: "Madrasa Website",
      description:
        "A full-stack educational institution management website",
      tech: ["React","Laravel", "Redux", "Material UI","AG GRID"],
      link: "http://test.amaderlab.xyz/",
      img: madrasaIMG,
      type:"Private"
    },
    {
      name: "Heccl Website",
      description:
        "A full-stack website for  a fertilizer factory ",
      tech: ["React","Laravel", "Redux", "Material UI","AG GRID"],
      link: "http://infocube.amaderlab.xyz/",
      img: hecclIMG,
      type:"Private"
    },
    {
      name: "Amaderlab Website",
      // define description as a company portfolio website
      description: "A website for a software company",
      tech: ["React","Laravel",  "Material UI"],
      link: "http://main.amaderlab.xyz/",
      img: amaderlabMG,
      type:"Public"

      
    }
  ];
  return (
    <Box className="flex-items-center">
      <a className="anchor" id="projects"></a>
      <Typography
        variant="overline"
        display="block"
        color="primary"
        gutterBottom
        sx={{
          fontSize: "14px",
          letterSpacing: "0.2rem",
          width: "100%",
          textAlign: "center",
        }}
        className="section-title"
      >
        VISIT MY PROJECTS
      </Typography>

      <Typography
        variant="h3"
        gutterBottom
        // make font weight bold
        sx={{
          fontWeight: "bold",
          fontSize: {
            xs: "2rem",
            sm: "3.5rem",
          },
          width: "100%",
          textAlign: "center",
        }}
        className="section-tag"
      >
        My Projects
      </Typography>
      <Box fullWidth sx={{ width: "100%", mt: 6, px: "2%" }}>
        {/* make stack */}
        <Stack
          direction="row"
          gap={4}
          // decrease horizontal gap
          alignItems="stretch"
          sx={{
            width: "100%",
            justifyContent: {
              xs: "center",
              sm: "space-around",
            },
          }}
          flexWrap="wrap"
        >
          {items.map((item, index) => {
            return (
              <Paper
                elevation={1}
                sx={{
                  px: 3,
                  pt: 4,
                  width: {
                    xs: "90%",
                    sm: "31%",
                  },
                  borderRadius: "15px",
                  // height: {
                  //   xs: "280px",
                  //   sm: "480px",
                  // },
                }}
                className={classes.projectCard}
              >
                {/* make image */}
                <Box
                  sx={{
                    // width: "auto",
                    // height: "900px !important",
                    overflow: "hidden",
                    borderRadius: "15px",
                    // background:'red'
                    height:{
                      xs:'200px',
                      sm:'210px'
                    }
                  }}
                >
                  <Box className={classes.projectStatus}>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      sx={{ fontSize: "0.6rem" }}
                    >
                      {
                        item?.type
                      }
                    </Typography>
                 {
                    item?.type === "Public" ?    <PublicIcon sx={{ fontSize: "0.9rem", pt: 0.3, mx: 0.5 }} />:    <LockIcon sx={{ fontSize: "0.9rem", pt: 0.3, mx: 0.5 }} />
                 }
                  </Box>
                  <img
                    src={item?.img}
                    alt="merchandise"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                    }}
                    className={classes?.projectIMG}
                  />
                </Box>

                <Typography
                  variant="h7"
                  gutterBottom
                  sx={{
                    fontWeight: "450",
                    my: 2,
                    fontSize: {
                      xs: "1.1rem",
                      sm: "1.3rem",
                    },
                  }}
                >
                  {item?.name}
                </Typography>

                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: "#646665",
                    fontSize: "0.8rem",
                    my: 2,
                    // height:{
                    //   xs:'100px',
                    //   sm:'100px'
                    // }
                  }}
                >
                  {item?.description}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent={"space-between"}
                  sx={{ my: 2 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      // my: 2,
                    }}
                  >
                    {item?.tech.map((tech, index) => {
                      return (
                        <>
                          <Chip
                            label={tech}
                            size="small"
                            variant="outlined"
                            className={classes.projectTech}
                          />
                        </>
                      );
                    })}
                  </Box>
                  <IconButton>
                    <KeyboardArrowRightIcon
                      className="moreIcon"
                      onClick={() => window.open(item?.link, "_blank")}
                    />
                  </IconButton>
                </Stack>

                {/* <PrimaryButton fullWidth sx={{ my: 3 }}>
                  Get this for 550
                </PrimaryButton> */}
              </Paper>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
