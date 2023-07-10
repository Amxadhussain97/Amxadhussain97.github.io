import { makeStyles } from "@mui/styles";

export const welcomeStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // give height to as much viewport it can take
    height: "92vh",
    // background:'red',
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      marginBottom:"50px"
    },

    // give css for lg device
    [theme.breakpoints.up("lg")]: {
      marginTop: "-9px !important",
    },
  },
  devAnimation: {
    width: "100%",
    height: "500px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    marginLeft: "86px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "220px",
      marginLeft: "0px",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      marginTop:'15px'

    },
  },
  hi: {
    fontSize: "2.6rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      margin:"10px 0px"
    },
  },
  name: {
    color: "#FF6200",
  },
  developer: {
    fontSize: "2.3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  },
  developerBio: {
    fontSize: "0.8rem",
   
    color: "#646665",
    letterSpacing: "0.1rem",
    marginTop: "18px",
    lineHeight: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem !important",
    },
  },
  skillImg: {
    width: "40px",
    height: "40px",
    [theme.breakpoints.down("sm")]: {
        width: "25px !important",
        height: "25px !important",

    },
    objectFit: "cover",
    borderRadius: "10px",
    margin: "6px",
  },
}));
