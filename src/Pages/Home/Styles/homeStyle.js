import { makeStyles } from "@mui/styles";

export const homeStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "0px 11%",
    //  background:'red',
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
    },
    // position:'relative'
  },
  downloadCv: {
    // make it fixed position and alignt it to top right
    position: "fixed",
    top: "14%",
    right: "0px",
    padding: "7px 20px",
    // give zindex to top
    zIndex: "100",
    background: theme.palette.primary.main,
    borderRadius: "15px 0px 0px 15px",
    // give color equal primary
    color: "white",
    cursor:'pointer',
    // give hover design

    "&:hover": {
      borderRadius: "15px 0px 0px 0px",
      // give transition
      transition: "all 0.5s ease",
      },

  },
}));
