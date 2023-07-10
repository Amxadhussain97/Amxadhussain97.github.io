import { makeStyles } from "@mui/styles";

export const useResumeStyles = makeStyles((theme) => ({
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
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      margin: "10px 0px",
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

  resumeContainer: {
    width: "100vw",
    height:'100%',
    background: [theme.palette.secondary.main],
    padding: "10% 10%",
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },

  resumeDetailsContainer: {
    position: "relative",
    height:'430px',
    width:'100%',
    display:'flex',
    flexDirection:'row',
    backgrounbd:'red',
    "& .resumeCardContainer": {
      position: "absolute",
      left: "6%",
      [theme.breakpoints.down("sm")]: {
        left: "12%",

      },
      height:'100%',
      width:"90%",


      "& .resumeCard": {
        height:'auto',
        marginBottom:'10px',

      }
    },
    "& .progressbar": {
      position: "absolute",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "1.4rem",
      left: "2%",
      top:"-2%",
      "& .line": {
        position: "absolute",
        height: "100%",
        width: "2px",
        backgroundImage:
          "linear-gradient(black 33%, rgba(255, 255, 255, 0) 0%)",
        backgroundPosition: "right",
        backgroundSize: "2px 30px",
        backgroundRepeat: "repeat-y",
        left: "48%",
        zIndex: "1",
        borderRadius: "5px",
      },
      "& > div": {
        flex: "1",
        paddingTop: ".8rem",
        zIndex: "2",
        "& .circle": {
          borderRadius: "50%",
          background: "black",
          width: "1.2rem",
          height: "1.2rem",
        },
      },
    },
  },
}));
