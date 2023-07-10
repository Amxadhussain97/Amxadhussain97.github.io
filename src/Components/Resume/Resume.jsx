import React from "react";
import { Box, Typography, TabScrollButton } from "@mui/material";
import { useResumeStyles } from "./Styles/resumeStyles";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Resume() {
  const classes = useResumeStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        my: {
          xs: 10,
          sm: 20,
        },
      }}
      className="flex-items-center"
    >
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
        My Resume
      </Typography>

      <Box className={classes.resumeContainer}>
        <Box
          sx={{
            width: {
              xs: "100vw",
              sm: "80%",
            },
          }}
        >
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="inherit"
              // textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
              TabScrollButtonComponent={TabScrollButton}
              aria-label="scrollable auto tabs example"
              style={{ flexGrow: 1 }}
              sx={{
                // change background color
                background: "white",
                color: "black",
                p: 1.5,

                // boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
              }}
              // aria-label="full width tabs example"
            >
              <Tab
                sx={{
                  mr: {
                    xs: 5,
                    sm: 25,
                  },
                  ml: 3,
                }}
                label="Education"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  mr: {
                    xs: 5,
                    sm: 25,
                  },
                }}
                label="Skills"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  mr: {
                    xs: 5,
                    sm: 25,
                  },
                }}
                label="Experience"
                {...a11yProps(2)}
              />
              <Tab label="Achievement" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Education />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Experience />
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Box>
    </Box>
  );
}
