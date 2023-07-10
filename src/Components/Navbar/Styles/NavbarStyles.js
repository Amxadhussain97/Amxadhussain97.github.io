import { makeStyles } from "@mui/styles";

export const navbarStyles = makeStyles((theme) => ({
    navBar:{
      //  margin:"29px 20px",
      //  marginBottom:'80px',
      padding:'5px',
       letterSpacing: "0.1rem",
       height:'8vh',
      //  background:'red',
       [theme.breakpoints.down("sm")]:{
            margin:"10px 0px",
       }

    },
  myImage: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    marginRight: "10px",
    border:"2px solid #bdbdbd",
    // fit the image to cover
    objectFit: "contain",
    // give a box shadow
    boxShadow: "0px 5px 8px rgba(255, 98, 0, 0.1)",
    [theme.breakpoints.down("sm")]: {
      width: "37px",
      height: "37px",
      marginRight: "5px",
    },
  },
  myBox: {
    // use the background color defined in the theme's palette
    background: theme.palette.background.backgroundImage,
    // add your other styles here
    width: "100%",
    // height: '80vh',
  },

  mainButton: {
    background: `#08368B`,
    color: "white",
    height: "60px",
    width: "310px",
    // borderRadius:"0.5rem",
    border: "0.3px solid rgba(255, 255, 255, .4) !important",
    cursor: "pointer",
    "&:hover": {
      background: `#4b48d6 !important`,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // give letter spacing
    letterSpacing: "0.1rem",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      height: "60px",
      fontSize: "0.8rem !important",
      background: "#056286",
    },
  },

  headTitle: {
    color: theme.palette.secondary.main,
    fontWeight: "bold !important",
    fontSize: "3.5rem !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem !important",
    },
    textShadow: "0px 5px 8px rgba(0, 0, 0, 0.1)",
    // increase text space
    letterSpacing: "0.1rem",
  },

  headSubTitle: {
    color: theme.palette.secondary.contrastText,
    fontSize: "0.8rem !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.4rem !important",
    },
  },
}));
