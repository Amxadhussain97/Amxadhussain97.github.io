import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat Alternates"].join(","),
  },
  palette: {
    background: {
      default: "#F8F7F1",

      
    },
    primary: {
      main: "#FF6200",
      contrastText: "white",
      light:"#696dc7"
    },
    secondary: {
      main: "#F8F7F1",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
      contrastText: "#fff",
      
    },
    black:{
      main:"#000",
      contrastText:"#000"
      
    }

  },
  components: {
    MuiSelect: {
      //   styleOverrides: {
      //     select: {
      //       background: "#FAFAFA",
      //     },
      //   },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&.Mui-disabled": {
            color: "black",
            "-webkit-text-fill-color": "black",
            backgroundColor: "#F9F9F9",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          "&.Mui-disabled": {
            color: "black",
            "-webkit-text-fill-color": "black",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: "rgba(0, 0, 0, 0.6)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "rgb(176, 172, 172)",
            color: "white",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        //     adornedEnd: {
        //       background: "#FAFAFA",
        //     },
        //     inputAdornedEnd: {
        //       height: "2.5rem",
        //     },
      },
    },

    MuiStepLabel: {
      //   styleOverrides: {
      //     label: {
      //       fontSize: "1rem",
      //       fontWeight: "600",
      //       "&.Mui-active": {
      //         color: "#67c8ff",
      //         fontWeight: "600",
      //       },
      //       "&.Mui-completed": {
      //         color: "#008ad9",
      //         fontWeight: "600",
      //       },
      //     },
      //   },
    },

    // make button text transform none
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        }
      }
    }

  },
});

export default theme;
