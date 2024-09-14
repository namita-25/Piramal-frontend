import React from 'react'
import { Stack, Typography } from '@mui/material'
const ScholarshipData = ({criteria,benifit,mandatoryDocuments}) => {
  return (
    <Stack>
      <Stack sx={{mt:2}}>
        <Typography>Available For</Typography>
        <Typography>GirlsChild from reseved cast category with 1st division marks and family income less than 2.5L</Typography>
      </Stack>
      <Stack sx={{mt:2}}>
        <Typography>Benifit</Typography>
        <Typography>INR 5000</Typography>
      </Stack>
      <Stack sx={{mt:2}}>
        <Typography>Mandatory Document</Typography>
        <Typography>GirlsChild from reseved cast category with 1st division marks and family income less than 2.5L</Typography>
      </Stack>
    </Stack>
  )
}

export default ScholarshipData
