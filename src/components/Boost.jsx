import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import imageBoost from "../images/bg-boost-desktop.svg";
import theme from "../Theme";
import PrimaryButton from "./PrimaryButton";

function Boost() {
  return (
    <>
      <Stack justifyContent="center" alignItems="center" gap="20px" sx={{
        backgroundImage:`url(${imageBoost})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundColor:theme.palette.primary.dark,
        padding:"100px 74px",
      }}>
        <Typography variant="h4" color="white" align="center">
          Boost your links today
        </Typography>
        <PrimaryButton variant="text" color="primary" sx={{ width: "150px" }}>
          Get Started
        </PrimaryButton>
      </Stack>
    </>
  );
}

export default Boost;
