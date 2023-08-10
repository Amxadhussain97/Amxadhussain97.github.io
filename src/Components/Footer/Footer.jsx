import React from 'react'
import { Box,Typography } from '@mui/material'

export default function Footer() {
  return (
    <div>
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            my:5
        }}>
            <Typography variant="subtitle2" sx={{
                fontSize:'0.8rem'
            }}>© 2023 All Rights Reserved</Typography>
            <Typography variant="subtitle2" sx={{
                fontSize:'0.8rem'
            }}>Designed & Developed by <span style={{color:'#FF6200'}}>Amzad Hussain Tamim</span></Typography>
        </Box>
    </div>
  )
}
