import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
function CustomButton({ label,variant="contained",height=40,width="maxWidth",borderRadius=0, fontSize=14, fontWeight='none', handleClick }) {

  return (
      <Button variant={variant} onClick={handleClick} sx={{height:{height} ,width:{width},borderRadius:{borderRadius},textTransform: 'none' }}>
        <Typography sx={{ fontSize: { fontSize }, fontWeight: { fontWeight } }}>
          {label}
        </Typography>
      </Button>
  
  );
}

export default CustomButton;
