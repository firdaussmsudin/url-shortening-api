import { Stack, styled, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import theme from "../Theme";

const SubMenuStack = styled(Stack)({
  marginTop: "20px",
  gap: "10px",
  [theme.breakpoints.down("md")]:{
    textAlign:"center"
  }
});

const SubMenuTypo = styled(Typography)({
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
  },
});

const HeadMenuTypo = styled(Typography)({
  marginTop: "0",
  textAlign:"left",
  [theme.breakpoints.down("md")]:{
    marginTop:"50px",
    textAlign:"center"
  }
})

function Footer() {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: theme.palette.neutral.darkBlue,
          padding: "50px 74px",
        }}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <Stack flex="3">
          <Typography variant="h1" color="white">
            Shortly
          </Typography>
        </Stack>
        <Stack flex="1">
          <HeadMenuTypo variant="h6" color="white">
            Features
          </HeadMenuTypo>
          <SubMenuStack>
            <SubMenuTypo variant="link" color="white" component="a" href="#">
              Link Shortening
            </SubMenuTypo>
            <SubMenuTypo variant="link" color="white" component="a" href="#">
              Branded Links
            </SubMenuTypo>
            <SubMenuTypo variant="link" color="white" component="a" href="#">
              Analytics
            </SubMenuTypo>
          </SubMenuStack>
        </Stack>
        <Stack flex="1">
          <HeadMenuTypo variant="h6" color="white">
            Resources
          </HeadMenuTypo>
          <SubMenuStack>
            <SubMenuTypo variant="link" color="white" component="a" href="#">
              Blog
            </SubMenuTypo>
            <SubMenuTypo variant="link" color="white" component="a" href="#">
              Developers
            </SubMenuTypo>
            <SubMenuTypo variant="link" color="white" component="a" href="#">
              Support
            </SubMenuTypo>
          </SubMenuStack>
        </Stack>
        <Stack flex="1">
          <HeadMenuTypo variant="h6" color="white" >
            Company
          </HeadMenuTypo>
          <SubMenuStack>
            <SubMenuTypo variant="link" color="white" component="a" href="#">
              About
            </SubMenuTypo>
            <SubMenuTypo variant="link" color="white" component="a" href="#">
              Our Team
            </SubMenuTypo>
            <SubMenuTypo variant="link" color="white" component="a" href="#">
              Careers
            </SubMenuTypo>
            <SubMenuTypo variant="link" color="white" component="a" href="#">
              Contact
            </SubMenuTypo>
          </SubMenuStack>
        </Stack>
        <Stack flex="2" direction="row" gap="10%" justifyContent={{xs:"center", md:"flex=end"}} sx={{marginTop:{xs:"50px",md:"0"}}} >
          <FacebookIcon
            sx={{
              fill: "white",
              "&:hover": {
                fill: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
          />
          <TwitterIcon
            sx={{
              fill: "white",
              "&:hover": {
                fill: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
          />
          <PinterestIcon
            sx={{
              fill: "white",
              "&:hover": {
                fill: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
          />
          <InstagramIcon
            sx={{
              fill: "white",
              "&:hover": {
                fill: theme.palette.primary.main,
                cursor: "pointer",
              },
            }}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default Footer;
