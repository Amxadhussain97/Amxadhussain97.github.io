import { makeStyles } from "@mui/styles";

export const useSkillStyles = makeStyles((theme) => ({
  skillsHead: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  eBio: {
    fontSize: "0.9rem",
    color: "#646665",
    letterSpacing: "0.1rem",
    marginTop: "18px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem !important",
    },
  },

  eCard: {
    "&:hover": {
      transform: "translateY(-4px)",
      transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
    },
  },

  skillContainer: {
    width: "100vw",
    // background:'green !important',
    background: "#F8F7F1 !important",
    // display:'flex',
    // justifyContent:'space-between',
    // alignItems:'center',
    // flexWrap:'wrap',\
    padding: "3% 15% !important",
    [theme.breakpoints.down("sm")]: {
      padding: "3% 7% !important",
  },
  },

  skillCard: {
    padding: "5%",
    display: "flex",
    justifyContent: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
  },
  skillCardImg: {
    width: "30px",
    height: "30px",
    objectFit: "cover",
    borderRadius: "10px",
    transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
    "&:hover": {
      transform: "translateY(-4px)",
      transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
    },
    [theme.breakpoints.down("sm")]: {
        width: "25px",
        height: "25px",
    },
  },
}));
