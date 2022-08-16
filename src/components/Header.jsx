import React from "react";
import Typography from "@mui/material/Typography";
import { Stack, Button, styled } from "@mui/material";
import { Box } from "@mui/system";
import PrimaryButton from "./PrimaryButton";
import illustrationWorking from "../images/illustration-working.svg";
import theme from "../Theme";

const InnerStack = styled(Stack)({
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "10px",
  [theme.breakpoints.down('sm')]:{
    alignItems:"center",
    margin:"40px 0"
  }
});

function Header() {
  return (
    <>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        sx={{
          padding: { xs: "0", sm: "0 0 0 74px" },
          height: { xs: "auto", sm: "80vh" },
        }}
      >
        <InnerStack>
          <Typography
            variant="h2"
            color="initial"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            More than just shorter links
          </Typography>
          <Typography
            variant="h3"
            color={theme.palette.neutral.gray}
            gutterBottom
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Typography>
          <PrimaryButton variant="text" color="primary" sx={{ width: "150px" }}>
            Get Started
          </PrimaryButton>
        </InnerStack>
        <Box sx={{ display: "flex" }}>
          <img
            src={illustrationWorking}
            alt="illustration-working"
            style={{
              // display the image cropped
              objectFit: "cover",
              width: "90%",
              height: "100%",
              objectPosition: "5px 0px",
              marginLeft: "auto",
            }}
          />
        </Box>
      </Stack>
    </>
  );
}

export default Header;
