import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import theme from "../Theme";
import iconBrand from "../images/icon-brand-recognition.svg";
import iconRecords from "../images/icon-detailed-records.svg";
import iconCustomizable from "../images/icon-fully-customizable.svg";

const IconBox = styled(Box)({
  backgroundColor: theme.palette.primary.dark,
  width: "70px",
  height: "70px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  borderRadius: "50%",
  margin: "-50px 0 50px 0",
});

const StatisticItemStack = styled(Stack)({
  backgroundColor: "white",
  padding: "20px 20px 50px 20px",
  borderRadius: "5px",
  marginTop: "100px",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "80px",
  },
});

function Statistic() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.back.grayPurple,
          padding: {xs:"50px 10px", sm:"150px 74px"},
        }}
      >
        <Stack alignItems="center">
          <Typography variant="h4" color="initial" sx={{textAlign:'center'}}>
            Advanced Statistics
          </Typography>
          <Typography
            variant="h3"
            color={theme.palette.neutral.gray}
            sx={{ textAlign: "center" }}
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap="5%"
          sx={{
            backgroundImage: `linear-gradient(${theme.palette.primary.main},${theme.palette.primary.main})`,
            backgroundPosition:{ xs: "50% 120px", md: "0 250px" },
            backgroundSize: { xs: "20px 100%", md: "100% 20px" },
            backgroundRepeat: "no-repeat",
          }}
        >
          <StatisticItemStack>
            <IconBox>
              <img src={iconBrand} alt="" />
            </IconBox>
            <Typography variant="h1" color="initial" gutterBottom>
              Brand Recognition
            </Typography>
            <Typography
              variant="h3"
              color={theme.palette.neutral.gray}
              sx={{ textAlign: "center" }}
            >
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </Typography>
          </StatisticItemStack>
          <StatisticItemStack sx={{ marginTop: "150px" }}>
            <IconBox>
              <img src={iconRecords} alt="" />
            </IconBox>
            <Typography variant="h1" color="initial" gutterBottom>
              Detailed Records
            </Typography>
            <Typography
              variant="h3"
              color={theme.palette.neutral.gray}
              sx={{ textAlign: "center" }}
            >
              Gain insights into who is clicking your links. Knowing when and
              where people engage with you content helps inform better
              decisions.
            </Typography>
          </StatisticItemStack>
          <StatisticItemStack sx={{ marginTop: "200px" }}>
            <IconBox>
              <img src={iconCustomizable} alt="" />
            </IconBox>
            <Typography variant="h1" color="initial" gutterBottom>
              Fully Customizable
            </Typography>
            <Typography
              variant="h3"
              color={theme.palette.neutral.gray}
              sx={{ textAlign: "center" }}
            >
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </Typography>
          </StatisticItemStack>
        </Stack>
      </Box>
    </>
  );
}

export default Statistic;
