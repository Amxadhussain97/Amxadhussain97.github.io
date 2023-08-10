import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";
import { useResumeStyles } from "../Styles/resumeStyles";

export default function Experience() {
  const classes = useResumeStyles();
  return (
    <Box className={classes.resumeDetailsContainer}>
      <Box className="progressbar">
        <div className="line"></div>
        <div>
          <div className="circle" style={{ background: "#286F6C" }}></div>
        </div>
        <div>
          <div className="circle" style={{ background: "#F2704E" }}></div>
        </div>
      </Box>
      <Box className="resumeCardContainer">
        <Paper
          className="resumeCard"
          variant="outlined"
          sx={{ borderRadius: "9px", p: 4 }}
        >
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "500",
                fontSize: {
                  xs: "0.9rem",
                  sm: "1.5rem",
                },
              }}
            >
              Software Engineer ( React | Laravel )
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "0.6rem",
                  sm: "0.9rem",
                },
              }}
            >
              Karigor Solutions ( December 2022 - February 2023)
            </Typography>

            <Divider sx={{ my: 2 }} />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.9rem",
                }
              }}
            >
             Developed full stack web application and maintained proper scalability and performances.
            </Typography>
          </Box>
        </Paper>
        <Paper
          className="resumeCard"
          variant="outlined"
          sx={{ borderRadius: "9px", p: 3 }}
        >
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "500",
                fontSize: {
                  xs: "0.9rem",
                  sm: "1.5rem",
                },
              }}
            >
            Web Developer Intern ( React | Laravel ) 
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "0.6rem",
                  sm: "0.9rem",
                },
              }}
            >
               AmaderLab ( August 2022 - October 2022)
            </Typography>

            <Divider sx={{ my: 2 }} />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.9rem",
                },
              }}
            >
              Developed full stack web application and maintained proper scalability and performances.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
