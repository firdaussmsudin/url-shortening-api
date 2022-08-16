import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../Theme";

const PrimaryButton = styled(Button)({
    color: `white`,
    backgroundColor: `${theme.palette.primary.main}`,
    borderRadius: "20px",
    width: "100px",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.light}`,
    },
  });

export default PrimaryButton;