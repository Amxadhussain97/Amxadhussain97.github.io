import { makeStyles } from "@mui/styles";

export const useProjectStyles = makeStyles((theme) => ({
  projectCard: {
    position: "relative",
    width: "100%",
    // height:'100%',
    display: "flex",
    // justifyContent:'center',
    // alignItems:'center',
    flexDirection: "column",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
      backgroundColor: "#F8F7F1",

      // zoom its child image
      "& img": {
        transition: "1000ms cubic-bezier(0.17, 0.67, 0, 1.01)",
        scale: "1.1",
      },

      // zoom its child button more-icon class
      "& .moreIcon": {
        transition: "1000ms cubic-bezier(0.17, 0.67, 0, 1.01)",
        fontSize:"2.3rem",
        // give color theme primary
        color: "black",
      },
    },
    // "& img": {
    //   // give minimum height
    //   height:'300px'
    // },
    "& .moreIcon": {
      fontSize:"1.9rem",
      height:'30px'
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: "100%",
      padding: "10px 0px",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
      },
    },
  },

 
  projectStatus: {
    position: "absolute",
    right: 6,
    top: 5,
    display: "flex",
    color: "#646665",
  },
  projectTech:{
    fontSize:'0.8rem !important',
    [theme.breakpoints.down("sm")]: {
      fontSize:'0.6rem !important',
    }
  }
}));
