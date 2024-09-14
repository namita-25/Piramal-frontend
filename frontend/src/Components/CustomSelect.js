import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
const CustomSelect = ({
  list,
  value,
  label,
  handleChange,
  fullwidth = false,
  height = 40,
  width = 250,
  isHelperText = false,
  helperText,
  helperTextFontSize,
  labelFontSize = 12,
  padding = 0,
  margin = 0,
  barderRadius=0
}) => {
  return (
    
    <FormControl fullWidth={fullwidth}>
      <InputLabel
        sx={{ fontSize: { labelFontSize } }} 
      >
        {label}
      </InputLabel>
      <Select
        value={value}
        label={label}
        onChange={handleChange}
        sx={{
          height: { height },
          padding: { padding },
          margin: { margin },
          width: { width },
          borderRadius: barderRadius, // add this line
   
        }}
        MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                      overflowY: "auto",
                    },
                  },
                }}
      >
        {list?.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      {isHelperText ? (
        <FormHelperText sx={{ fontSize: { helperTextFontSize } }}>
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default CustomSelect;
