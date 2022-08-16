import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import theme from "../Theme";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";

const MenuButton = styled(Button)({
  color: `${theme.palette.neutral.gray}`,
  textTransform: "capitalize",
  "&:hover": {
    color: `${theme.palette.primary.dark}`,
    backgroundColor: "transparent",
  },
});

const PrimaryButton = styled(Button)({
  color: `white`,
  backgroundColor: `${theme.palette.primary.main}`,
  borderRadius: "20px",
  width: "100px",
  "&:hover": {
    backgroundColor: `${theme.palette.primary.light}`,
  },
});

const MobileMenuItem = styled(MenuItem)({
  justifyContent: "center",
  color: "white",
});

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "0 0",
        padding: { xs: "0 10px", md: "0 50px" },
      }}
    >
      <Toolbar>
        <Typography variant="h1">Shortly</Typography>
        <Box sx={{ marginLeft: "20px", display: { xs: "none", sm: "flex" } }}>
          <MenuButton variant="text">
            <Typography variant="h6">Features</Typography>
          </MenuButton>
          <MenuButton variant="text">
            <Typography variant="h6">Pricing</Typography>
          </MenuButton>
          <MenuButton variant="text">
            <Typography variant="h6">Resources</Typography>
          </MenuButton>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            display: { xs: "none", sm: "flex" },
            gap: "10px",
          }}
        >
          <MenuButton variant="text" color="primary">
            <Typography variant="h6">Login</Typography>
          </MenuButton>
          <PrimaryButton variant="text" color="primary">
            <Typography variant="h6">Sign Up</Typography>
          </PrimaryButton>
        </Box>
        <MenuIcon
          sx={{ marginLeft: "auto", display: { xs: "block", sm: "none" } }}
          onClick={() => {
            setMobileMenu(true);
          }}
        />
        <Menu
          id="menu-button"
          keepMounted
          open={mobileMenu}
          onClose={() => {
            setMobileMenu(false);
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{
            // display menu below the button
            sx: {
              width: "100%",
              marginTop: "15%",
              backgroundColor: theme.palette.primary.dark,
            },
          }}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <MobileMenuItem>
            <Typography variant="h6">Features</Typography>
          </MobileMenuItem>
          <MobileMenuItem>
            <Typography variant="h6">Pricing</Typography>
          </MobileMenuItem>
          <MobileMenuItem>
            <Typography variant="h6">Resources</Typography>
          </MobileMenuItem>
          <hr style={{ margin: "0 10px" }} />
          <MobileMenuItem>
            <Typography variant="h6">Login</Typography>
          </MobileMenuItem>
          <MobileMenuItem>
            <PrimaryButton
              variant="text"
              color="primary"
              sx={{ width: "100%" }}
            >
              <Typography variant="h6">Sign Up</Typography>
            </PrimaryButton>
          </MobileMenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
