import { makeStyles } from "@mui/styles";

export const  homeStyles = makeStyles((theme) => ({
    container:{
       display:'flex',
       justifyContent:'center',
       alignItems:"center",
       flexDirection:'column',
       padding:"0px 11%",
 
      //  background:'red',
       width:'100%',
         [theme.breakpoints.down("sm")]: {
            padding:"0px 20px",
            },

    }
 
   
}));
