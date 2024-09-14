import React from "react";
import CustomButton from "../../Components/CustomButton";
import CustomSelect from "../../Components/CustomSelect";
import SholarshipCard from "../../Components/SholarshipCard";
function Register() {
  const handleClick = () => {
    console.log("button clicke");

  };

  const data=[{id:1,name:'English'},{id:2,name:'Hindi'}]
  return (
    <>
      {/* <CustomButton
        variant={"outlined"}
        fontSize={12}
        fontWeight={"bold"}
        label={"Submit"}
        handleClick={handleClick}
        height={60}
        borderRadius={15}
      />
      <CustomButton
        variant={"contained"}
        fontSize={12}
        fontWeight={"bold"}
        label={"Submit"}
        handleClick={handleClick}
      />
      <br></br>
      <CustomSelect list={data} label={"Select Language"}/>

      <br></br> */}
     <br></br>
      <SholarshipCard scholarshipName ={"SC SCholarship"} amount={"500INR"} location={"Madhya Pradesh"} endDate={"30 September 2024"}/>
      
      
    </>
  );
}

export default Register;
