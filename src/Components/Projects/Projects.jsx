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

export default function Projects() {
  const classes = useProjectStyles();

  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box className="flex-items-center">
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
        VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
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
                  }}
                >
                  <Box className={classes.projectStatus}>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      sx={{ fontSize: "0.6rem" }}
                    >
                      Public
                    </Typography>
                    <PublicIcon sx={{ fontSize: "0.9rem", pt: 0.3, mx: 0.5 }} />
                  </Box>
                  <img
                    src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-02-340x250.jpg"
                    alt="merchandise"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                    }}
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
                  BughiChugi Site
                </Typography>

                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ color: "#646665", fontSize: "0.8rem", my: 2 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, quibusdam.
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
                    <Chip
                      label="React"
                      size="small"
                      variant="outlined"
                      className={classes.projectTech}
                    />
                    <Chip
                      label="MUI"
                      size="small"
                      variant="outlined"
                      className={classes.projectTech}
                    />
                    <Chip
                      label="React"
                      size="small"
                      variant="outlined"
                      className={classes.projectTech}
                    />
                  </Box>
                  <IconButton>
                    <KeyboardArrowRightIcon className="moreIcon" />
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
