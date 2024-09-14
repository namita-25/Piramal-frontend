import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CustomButton from "./CustomButton";
import CustomDialog from "./Dialog";
import { Box } from "@mui/material";

import { Icon } from "@mui/material";
import ScholarshipData from "./ScholarshipDetails.js";
const SholarshipCard = ({ scholarshipName, amount, location , endDate }) => {
    ///todo:write logic for endDate bgColor
  return (
    <Card sx={{ maxWidth: 345 ,borderRadius:3}}>
  <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
    <Typography
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        fontSize: "12px",
        color: "text.secondary",
        zIndex: 1,
        bgcolor:'#EF5A6F',
        color:'white',
        pr:2,
        pl:2,
        borderRadius:'0 0 0 6px'

      }}
    >
      {endDate}
    </Typography>
  </Box>
      <CardContent>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            fontWeight: "bold",
            mt: 1,
          }}
        >
          <Icon sx={{ marginRight: 3, verticalAlign: "middle" }}>
            <SchoolIcon />
          </Icon>
          <span>{scholarshipName}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            color: "text.secondary",
            mt: 1,
          }}
        >
          <Icon sx={{ marginRight: 3, verticalAlign: "middle" }}>
            <CurrencyRupeeIcon />
          </Icon>
          <span>{amount}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            color: "text.secondary",
            mt: 1,
          }}
        >
          <Icon sx={{ marginRight: 3, verticalAlign: "middle" }}>
            <LocationOnIcon />
          </Icon>
          <span>{location}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton lable={1} variant="text" />
        <CustomDialog
          title={"View Details"}
          DialogData={<ScholarshipData />}
          DialogButtonText={"Procced To Apply"}
        />
      </CardActions>
    </Card>
  );
};

export default SholarshipCard;
