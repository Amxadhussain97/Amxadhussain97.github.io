import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import PieChart from "./PieChart";
import { useProblemSolvingStyles } from "./Styles/problemSolvingStyles";
import PsCard from "./Card/PsCard";
import cfIMG from "../../assets/images/codeforces.png";
import csIMG from "../../assets/images/codeshef.png";

export default function ProblemSolving() {
  const classes = useProblemSolvingStyles();
  return (
    <Box className="full-width flex-items-center ">
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
        problem solving
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

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6} md={8}>
        <Grid container spacing={2} >
                <Grid item xs={12} sm={6} md={6}>
                  <PsCard img={cfIMG} title={"Codeforces"} />
                </Grid>
                 <Grid item xs={12} sm={6} md={6}>
                  <PsCard img={csIMG} title={"Codeshef"}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <PsCard img={cfIMG} title={"Codeforces"} />
                </Grid>
                 <Grid item xs={12} sm={6} md={6}>
                  <PsCard img={csIMG} title={"Codeshef"}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <PsCard img={cfIMG} title={"Codeforces"} />
                </Grid>
                 <Grid item xs={12} sm={6} md={6}>
                  <PsCard img={csIMG} title={"Codeshef"}/>
                </Grid>
              </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{mt:{
          xs:6,
          sm:0
        }}}>
          <PieChart />
        </Grid>
      </Grid>
    </Box>
  );
}
