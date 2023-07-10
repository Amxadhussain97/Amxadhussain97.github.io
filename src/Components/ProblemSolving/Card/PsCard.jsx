import React from "react";
import { useProblemSolvingStyles } from "../Styles/problemSolvingStyles";
import { Box, Typography, Paper, Avatar, Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PsCard({ img,title }) {
  const classes = useProblemSolvingStyles();
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Paper variant="outlined" className={classes.psCard}>
      {/* <Avatar variant="square" src = {img}  >N</Avatar>
       */}
      <img src={img} />
      <Box sx={{ height: "100%", py: 2 }}>
        <Typography variant="h6" gutterBottom className={classes.psTitle}>
          {title}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom className={classes.psDetails}>
          Handle: TamimVai ( Max Rating: 1440)
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
