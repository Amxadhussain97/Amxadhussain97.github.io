import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import Lottie from "react-lottie";
import developerAnimation from "../../assets/lottie/developerAnimation.json";
import { welcomeStyles } from "./Styles/welcomeStyles";
import Skills from "./Skills/Skills";
import Social from "./Social/Social";
import Hidden from "@mui/material/Hidden";

export default function Welcome() {
  const classes = welcomeStyles();
  const options = {
    loop: true,
    autoplay: true,
    animationData: developerAnimation,
  };
  return (
    <Box
      className={classes.container}
      sx={
        {
          // background:'red',
        }
      }
    >
      <a className="anchor" id="home"></a>
      <Box>
        <Grid
          container
          sx={
            {
              // height:'100%',
              // background:'blue',
            }
          }
        >
          <Grid item xs={12} sm={7}>
            <Hidden implementation="css" mdUp>
              <Box className={classes.devAnimation}>
                <Lottie options={options} />
              </Box>
            </Hidden>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "0.5rem",
                  sm: "0.8rem",
                },
                // increase the font character gap
                letterSpacing: "0.2rem",
                mt: {
                  xs: "30px",
                  sm: "12px",
                },
              }}
            >
              Welcome to my world
            </Typography>
            <h1 className={classes.hi}>
              Hi, I'm <span className={classes.name}>Amzad Hussain Tamim</span>
            </h1>
            
            <h2 className={classes.developer}>a Web Developer</h2>
            <p className={classes.developerBio}>
              As an experienced full-stack web developer and competitive
              programmer, I am committed to providing high-quality software
              solutions that meet customer demands. I am versatile and confident
              in producing the best results for every project because I have a
              solid understanding of programming languages including Javascript,
              PHP, C/C++ and Python. I bring a dedication to excellence and a
              commitment for creating user-friendly software, whether working
              alone or with a team
            </p>

            <Box
              sx={{
                mt: {
                  xs: "40px",
                  sm: "15%",
                },
                mb: {
                  xs: "-40px !important",
                  sm: "0px",
                },
              }}
            >
              <Grid container>
                <Grid item xs={7} sm={6}>
                  <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                    sx={{
                      fontSize: {
                        xs: "0.5rem",
                        sm: "0.8rem",
                      },
                      letterSpacing: "0.2rem",
                      mb: 1,
                    }}
                  >
                    FIND ME ON
                  </Typography>
                  <Box>
                    <Social />
                  </Box>
                </Grid>
                <Grid item xs={5} sm={6} sx={{}}>
                  <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                    sx={{
                      fontSize: {
                        xs: "0.5rem",
                        sm: "0.8rem",
                      },
                      letterSpacing: "0.2rem",
                      mb: 1.35,
                    }}
                  >
                    BEST SKILL ON
                  </Typography>
                  <Box>
                    <Box>
                      <Skills />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Hidden implementation="css" smDown>
              <Box className={classes.devAnimation}>
                <Lottie options={options} />
              </Box>
            </Hidden>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
