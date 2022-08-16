import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(180, 66%, 49%)",
      dark: "hsl(257, 27%, 26%)",
      light: "hsl(179, 47%, 72%)",
    },
    secondary: {
      main: "hsl(0, 87%, 67%)",
    },
    neutral: {
      gray: "hsl(0, 0%, 75%)",
      grayViolet: "hsl(257, 7%, 63%)",
      darkBlue: "hsl(255, 11%, 22%)",
      darkViolet: "hsl(260, 8%, 14%)",
    },
    back:{
      grayPurple:"hsl(230, 23%, 95%)",
    }
  },
  typography: {
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "22px",
      fontWeight: "700",
    },
    h2: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "clamp(3rem, 2.2857rem + 1.9048vw, 4rem)",
      fontWeight: "700",
    },
    h3: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "18px",
      fontWeight: "500",
      textAlign: "left",
    },
    h4: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "50px",
      fontWeight: "700",
    },
    h6: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "14px",
      fontWeight: "700",
    },
    link: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "14px",
      fontWeight: "500",
    },
    error:{
      fontFamily: "Poppins, sans-serif",
      fontSize: "14px",
      fontWeight: "500",
      textAlign: "left",
      fontStyle: 'italic'
    },
  },
});

export default theme;
