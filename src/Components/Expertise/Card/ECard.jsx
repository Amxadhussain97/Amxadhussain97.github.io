import React from "react";
import { Paper, Box, Grid, Typography } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { expertiseStyles } from "../Styles/expertiseStyles";

export default function ECard({title,bio}) {
  const classes = expertiseStyles();

  return (
    <Box>
      <Paper
            elevation={1}
            sx={{ borderRadius: "9px", p: 5,
            height:{
              xs: "240px",
              sm: "250px",
            }
             }}
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
              {
                title
              }
            </Typography>
            <Typography variant="caption" gutterBottom className={classes.eBio}>
             {
                bio
             }
            </Typography>
          </Paper>
    </Box>
  );
}
