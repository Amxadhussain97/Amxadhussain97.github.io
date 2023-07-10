import React from "react";
import { Box, Typography,Paper,Divider,Card,Chip } from "@mui/material";
import { useResearchStyles } from "./Styles/ResearchStyles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


export default function Research() {
  const classes = useResearchStyles();

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  
  return (
    <Box sx={{width:'100%'}}>
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
        Research solving
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
        Research
      </Typography>
      <Box>
      <Paper
          variant="outlined"
          sx={{ borderRadius: "9px", p: 4,my:8 }}
          className={classes.research}
        >
            <Box className="research-published">
              <Typography variant="caption" display="block" gutterBottom sx={{px:2,pt:0.3,
              fontSize:{
                xs:'0.7rem',
                sm:'0.9rem'
              }
              }}>
                Published
              </Typography>
              
            </Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "500",
             mt:{
                xs:2,
                sm:0
             },
             fontSize:{
                xs:'1rem',
                sm:'1.5rem'
             }
             }}>
              Emotion Ditection Based on Covid 19 related text
            </Typography>
            <Typography variant="caption" display="block" gutterBottom
            sx={{
              fontSize:{
                xs:'0.7rem',
                sm:'0.9rem'
              }
            }}
            >
              Leading University (2017-2020)
            </Typography>

            <Divider sx={{ my: 2 }} />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{ fontSize: {
                xs: "0.8rem",
                sm: "0.9rem",
              } }}
            >
              The training provided by universities in order to prepare people
              to work in various sectors of the economy or areas of culture.
            </Typography>
            <Chip
          label="Paper Link"
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
            right:11,
            fontSize:{
              xs:'0.5rem',
              sm:'0.6rem'
            }
          }}
        />
        </Paper>
      </Box>
    </Box>
  );
}
