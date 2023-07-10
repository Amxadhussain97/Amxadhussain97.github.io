import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { useSkillStyles } from "../SkillsStyles/skillStyles";

export default function SkillItem({ skill }) {
  const classes = useSkillStyles();
  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Typography sx={{ my: 1 }}>{skill.section}</Typography>
      <Grid container
    //   give gap 1
    spacing={1}
      >
        {skill?.items?.map((value, index) => {
          return (
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Paper elevation={1} className={classes.skillCard}>
                 <img 
                    src={value.logoPath}
                    className={classes.skillCardImg}
                 />
                <Typography sx={{
                  fontSize:{
                    xs:'0.85rem',
                    sm:'1rem'
                  }
                }}>
                    {
                        value.name
                    }
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
