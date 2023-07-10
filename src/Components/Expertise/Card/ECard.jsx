import React from "react";
import { Paper, Box, Grid, Typography } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { expertiseStyles } from "../Styles/expertiseStyles";

export default function ECard() {
  const classes = expertiseStyles();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            elevation={1}
            sx={{ borderRadius: "9px", p: 5 }}
            className={classes.eCard}
          >
            <Box>
              <DashboardOutlinedIcon
                color="primary"
                sx={{ fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                } }}
              />
            </Box>
            <Typography
              variant="h6"
              gutterBottom
              // make text bold
              sx={{
                fontWeight: "bold",
                my: {
                  xs: 1,
                  sm: 2,
                },
                fontSize:{
                  xs: "1rem",
                  sm: "1.3rem",
                }
             
              }}
            >
              Web Developing
            </Typography>
            <Typography variant="caption" gutterBottom className={classes.eBio}>
              I have experience in building responsive websites and web
              applications. I have also worked with React Native and Flutter for
              mobile app development.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Paper
            elevation={1}
            sx={{ borderRadius: "9px", p: 5 }}
            className={classes.eCard}
          >
            <Box>
              <DashboardOutlinedIcon
                color="primary"
                sx={{ fontSize: "3.5rem" }}
              />
            </Box>
            <Typography
              variant="h6"
              gutterBottom
              // make text bold
              sx={{
                fontWeight: "bold",
                my: {
                  xs: 1,
                  sm: 2,
                },
                fontSize:{
                  xs: "1rem",
                  sm: "1.3rem",
                }
             
              }}
            >
              Web Developing
            </Typography>
            <Typography variant="caption" gutterBottom className={classes.eBio}>
              I have experience in building responsive websites and web
              applications. I have also worked with React Native and Flutter for
              mobile app development.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
