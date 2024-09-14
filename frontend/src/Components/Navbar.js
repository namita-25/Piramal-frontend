import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CustomSelect from './CustomSelect';

export default function Navbar() {
    //select to select language
    const language=[{id:1,name:'En'}];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:'white',display: 'flex', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{  justifyContent: 'flex-end' }}>
            <CustomSelect list={language} value={1} width={75} barderRadius={2} />
          </Box>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}