import React, { useState } from "react";
import { useSkillStyles } from "./SkillsStyles/skillStyles";
import { Box, Typography, Paper, Grid } from "@mui/material";
import SkillItem from "./SkillItem/SkillItem";
import ReactIMG from "../../assets/images/react.png"
import LaravelIMG from "../../assets/images/laravel.png"
import htmlIMG from "../../assets/images/html.png"
import cssIMG from "../../assets/images/css.png"
import jsIMG from "../../assets/images/js.png"
import phpIMG from "../../assets/images/php.png"
import pythonIMG from "../../assets/images/python.png"
import reduxIMG from "../../assets/images/redux.png"
import muiIMG from "../../assets/images/mui.png"
import bootstrapIMG from "../../assets/images/bootstrap.png"
import jiraMG from "../../assets/images/jira.jpeg"
import gitMG from "../../assets/images/git.png"
import puppeterbMG from "../../assets/images/puppeter.png"


export default function Skills() {
  const classes = useSkillStyles();
  const [skills, setSkills] = useState([
    {
      id: 1,
      section: "Languages",
      items: [
        {
          id: 1,
          name: "HTML5",
          logoPath: htmlIMG,
          value: "Medium",
        },
        {
          id: 2,
          name: "CSS",
          logoPath: cssIMG,
          value: "Medium",
        },
        {
          id: 3,
          name: "Javascript",
          logoPath: jsIMG,
          value: "Expert",
        },
        {
          id: 4,
          name: "PHP",
          logoPath: phpIMG,
          value: "Expert",
        },
        {
            id: 5,
            name: "Python",
            logoPath: pythonIMG,
            value: "Expert",
          },
      ],
    },
    {
      id: 2,
      section: "UI | FRAMEWORK | LIBRARY",
      items: [
        {
          id: 1,
          name: "React",
          logoPath: ReactIMG,
          value: "Medium",
        },
        {
          id: 2,
          name: "Laravel",
          logoPath: LaravelIMG,
          value: "Medium",
        },
        {
          id: 3,
          name: "Redux",
          logoPath: reduxIMG,
          value: "Expert",
        },
        {
            id: 3,
            name: "Material UI",
            logoPath: muiIMG,
            value: "Expert",
          },
          {
            id: 3,
            name: "Bootstrap",
            logoPath: bootstrapIMG,
          }
      ],
    },
    {
        id:3,
        section:"TOOLS",
        items:[
            {
                id:1,
                name:"Jira",
                logoPath:jiraMG,
                value:"Expert"
            },
            {
                id:2,
                name:"Git",
                logoPath:gitMG,
            }
        ]
    },
    {
        id:4,
        section:"Web Scraping",
        items:[
            {
                id:1,
                name:"Puppeteer JS",
                logoPath:puppeterbMG,
            }]
    }
  ]);

  return (
    <div>
      <Box className="flex-items-center">
      <a className="anchor" id="skills"></a>
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
          My Skills
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
          Skills
        </Typography>
        <Box className={classes.skillContainer}>
     
          {skills.map((skill, index) => {
            return <SkillItem skill={skill} />;
          })}
        </Box>
      </Box>
    </div>
  );
}
