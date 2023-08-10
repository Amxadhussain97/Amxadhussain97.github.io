import React from "react";
import { useProblemSolvingStyles } from "../Styles/problemSolvingStyles";
import { Box, Typography, Paper, Avatar, Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PsCard({ img,title,handle,link }) {
  const classes = useProblemSolvingStyles();
  const handleClick = () => {
    // make a different tabe with the link https://link.springer.com/article/10.1007/s42979-022-01077-1
    window.open(
      link,
      "_blank"
    );
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Paper variant="outlined" className={classes.psCard}>
      {/* <Avatar variant="square" src = {img}  >N</Avatar>
       */}
      <img src={img} />
      <Box sx={{ height: {
        xs:'100px',
        sm:'100px'
      }, py: 2,mb:5 }}>
        <Typography variant="h6" gutterBottom className={classes.psTitle}>
          {title}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom className={classes.psDetails}>
          Handle: {
            handle
          }
        </Typography>
        <Typography variant="caption" display="block" gutterBottom className={classes.psDetails}>
          Solved 600 problems
        </Typography>
        <Chip
          label="More Details"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<ChevronRightIcon />}
          component="a"
          href="#basic-chip"
          variant="outlined"
          size="small"
          clickable
          sx={{
            position:'absolute',
            bottom:14,
            right:8,
            fontSize:{
              xs:'0.42rem',
              sm:'0.6rem'
            },
            width:{
              xs:'80px',
              sm:'100px'
            }
          }}
        />
      </Box>
    </Paper>
  );
}
