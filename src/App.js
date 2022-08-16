import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Shortener from "./components/Shortener";
import Statistic from "./components/Statistic";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import theme from "./Theme.jsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       <Navbar />
       <Header />
       <Shortener />
       <Statistic />
       <Boost />
       <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
