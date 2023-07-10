import { makeStyles } from "@mui/styles";

export const expertiseStyles = makeStyles((theme) => ({
   
expertiseHead:{
    width:'100%',
    display:'flex',
    justifyContent:'flex-start',
    flexDirection:'column',
    alignItems:'flex-start',
    marginBottom:'30px',
    [ theme.breakpoints.down("sm")]:{
        alignItems:'center',
    },
},
eBio:{
    fontSize:"0.9rem",
    color:"#646665",
    letterSpacing:"0.1rem",
    marginTop:"18px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.7rem !important",
        width:'100%'
        },
        

},

eCard:{
    
    "&:hover": {
        transform:"translateY(-4px)",
        transition:"700ms cubic-bezier(0.17, 0.67, 0, 1.01)"
    }
}
//   myImage: {
//     width: "70px",
//     height: "70px",
//     borderRadius: "50%",
//     marginRight: "10px",
//     border:"2px solid #bdbdbd",
//     // fit the image to cover
//     // objectFit: "cover",
//     [theme.breakpoints.down("sm")]: {
//       width: "30px",
//       height: "30px",
//       marginRight: "5px",
//     },
//   },

}));
