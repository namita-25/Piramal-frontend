import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import SholarshipCard from '../../Components/SholarshipCard';
const ScolarshipListing = () => {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
      mt:'20px'
    }}
  >
   <Grid container  sx={{height:'100vh',width:'450px'}} direction={'column'}>
     
       <Grid item >
        <SholarshipCard scholarshipName ={"SC SCholarship"} amount={"500INR"} location={"Madhya Pradesh"} endDate={"30 September 2024"}/>
      </Grid>
      <Grid item  >
        <SholarshipCard scholarshipName ={"SC SCholarship"} amount={"500INR"} location={"Madhya Pradesh"} endDate={"30 September 2024"}/>
      </Grid>
      <Grid item  >
        <SholarshipCard scholarshipName ={"SC SCholarship"} amount={"500INR"} location={"Madhya Pradesh"} endDate={"30 September 2024"}/>
      </Grid>
      

      
      
     
    </Grid>

  </Box>
  )
}

export default ScolarshipListing
