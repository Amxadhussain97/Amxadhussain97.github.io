import React, { useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import PieChart from "./PieChart";
import { useProblemSolvingStyles } from "./Styles/problemSolvingStyles";
import PsCard from "./Card/PsCard";
import cfIMG from "../../assets/images/codeforces.png";
import csIMG from "../../assets/images/codeshef.png";
import uvaIMG from "../../assets/images/uva.png";
import lightojIMG from "../../assets/images/ligthoj.png";

export default function ProblemSolving() {
  const classes = useProblemSolvingStyles();

  let data = [
    {
      name: "Codeforces",
      solved: 400,
      img: cfIMG,
      handle: "TamimVai ( Max Rating: 1440)",
      link: "https://codeforces.com/profile/TamimVai",
    },
    {
      name: "Codeshef",
      solved: 300,
      img: csIMG,
      handle: "mohammed_tamim",
      link: "https://www.codechef.com/users/mohammed_tamim",
    },
    {
      name: "UVA",
      solved: 200,
      img: uvaIMG,
      handle: "Mohammed_Tamim",
      link: "https://codeforces.com/profile/TamimVai",
    },
    {
      name: "LightOJ",
      solved: 100,
      img: lightojIMG,
      handle: "Amzad Hussain Tamim",
      link: "https://lightoj.com/user/amzadhussain",
    },
  ];

  return (
    <Box className="full-width flex-items-center ">
      <a className="anchor" id="problemsolving"></a>
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
        SOLVED AROUND 800+ PROBLEMS
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
        Problem Solving
      </Typography>

      <Box>
        <Grid
          container
          spacing={4}
          sx={{
            mt: 4,
            // height:{
            //   xs:"auto",
            //   sm:"00px",

            // }
          }}
        >
          <Grid item xs={12} sm={6} md={8}>
            <Grid
              container
              spacing={2}
              sx={{
                my: {
                  xs: 0,
                  sm: 5,
                },
              }}
            >
              {data.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={6}>
                    <PsCard
                      img={item.img}
                      title={item.name}
                      solved={item.solved}
                      handle={item.handle}
                      link={item.link}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              mt: {
                xs: 6,
                sm: 0,
              },
            }}
          >
            <PieChart />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
