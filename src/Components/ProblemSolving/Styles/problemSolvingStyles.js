import { makeStyles } from "@mui/styles";

export const useProblemSolvingStyles = makeStyles((theme) => ({

    psCard:{
        position:'relative',
        width:'95%',
        // height:'100px',
        // give radious
        borderRadius:'2% !important',
        display:'flex',
        "& img":{
            width:'100px',
            height:'90px',
            objectFit:'cover',
            margin:"5% 3%",
            // give border right
            borderRight:'1px solid #ccc',
            paddingRight:'13px'
        }
    },
    psTitle:{
        fontSize:'1.2rem',
        [theme.breakpoints.down("sm")]:{
            fontSize:'0.9rem !important'

        }

    },
    psDetails:{
        fontSize:'0.6rem !important',
        [theme.breakpoints.down("sm")]:{
            fontSize:'0.5rem !important'

        }
    }

}))