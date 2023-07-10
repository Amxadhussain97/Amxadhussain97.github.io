import React from 'react'
import { Paper,Box,Avatar } from '@mui/material'
import reactIMG from "../../../assets/images/react.png"
import laravelIMG from "../../../assets/images/laravel.png"
import { welcomeStyles } from '../Styles/welcomeStyles'

export default function Skills() {
    const classes = welcomeStyles();
  return (
    <Box className="flex-items-row" sx={{gap:3}}>
            <Paper elevation={1} sx={{borderRadius:'9px'}} >
                <Avatar src={reactIMG} alt="react" className={classes.skillImg} />
            </Paper>
            <Paper elevation={1} sx={{borderRadius:'9px'}} >
                <Avatar src={laravelIMG} alt="react" className={classes.skillImg} />
            </Paper>
    </Box>
  )
}
