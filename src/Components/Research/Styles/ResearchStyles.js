import { makeStyles } from "@mui/styles";

export const useResearchStyles = makeStyles((theme) => ({
  research: {
    position:'relative',
    "& .research-published":{
        position:'absolute',
         padding:'0.2% 2%',
        top:8,
        right:0,
        background:"#70a858",
        color:'white',
        // give left border radious
        borderTopLeftRadius:'10px',
        borderBottomLeftRadius:'10px',
        "& .MuiTypography-caption":{
            fontSize:'0.7rem'

        }
    }
  },
}));
