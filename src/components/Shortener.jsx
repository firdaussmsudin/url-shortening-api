import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import {
  Input,
  Button,
  styled,
  TextField,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import PrimaryButton from "./PrimaryButton";
import { Box } from "@mui/system";
import theme from "../Theme";
import bgShorten from "../images/bg-shorten-desktop.svg";
import axios from "axios";
import { LoadingButton } from "@mui/lab";

const ShortenBox = styled(Box)({
  backgroundColor: `${theme.palette.primary.dark}`,
  backgroundImage: `url(${bgShorten})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "50px 50px 30px 50px",
  margin: "70px 74px 0 74px",
  borderRadius: "5px",
  [theme.breakpoints.down("sm")]: {
    margin: "40px 10px",
    padding: "20px",
  },
});

const ShortenStack = styled(Stack)({
  margin: "20px 74px",
  borderRadius: "5px",
  padding: "20px 50px",
  backgroundColor:"white",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    margin: "40px 10px",
    padding: "20px",
    gap: "10px",
    alignItems: "flex-start",
  },
});

const CustomLoadingButton = styled(LoadingButton)({
  color: `white`,
  backgroundColor: `${theme.palette.primary.main}`,
  borderRadius: "20px",
  width: "100px",
  "&:hover": {
    backgroundColor: `${theme.palette.primary.light}`,
  },
});

function Shortener() {
  const baseURL = "https://api.shrtco.de/v2/shorten?url=";
  const [shortenLink, setShortenLink] = useState([]);
  const [originalLink, setOriginalLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [emptyInput, setEmptyInput] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  const handleSubmit = (e) => {
    if (originalLink == "") {
      setErrorInput(true);
    } else {
      setLoading(true);
      setErrorInput(false);
      axios.get(baseURL + originalLink).then((response) => {
        const returnLink = {
          shorten: response.data.result.short_link,
          original: response.data.result.original_link,
          copied: false,
        };
        const newArray = [...shortenLink, returnLink];
        setShortenLink(newArray);
        setLoading(false);
      });
    }

    e.preventDefault();
  };

  const copyHandler = (e, shortLink) => {
    navigator.clipboard.writeText(shortLink);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(${theme.palette.back.grayPurple},${theme.palette.back.grayPurple})`,
          backgroundPosition: "0 200px",
          backgroundRepeat: "no-repeat",
          padding:"50px 0"
        }}
      >
        <ShortenBox>
          <FormControl
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "2%",
            }}
          >
            <TextField
              autoComplete="none"
              id="shortlink-input"
              placeholder="Shorten a link here"
              aria-describedby="shorten-error"
              sx={{
                flexBasis: { xs: "100%", sm: "78%" },
                backgroundColor: "white",
                borderRadius: "5px",
              }}
              value={originalLink}
              onInput={(e) => setOriginalLink(e.target.value)}
              error={errorInput ? true : false}
            />
            <CustomLoadingButton
              component="button"
              sx={{
                width: "120px",
                borderRadius: "5px",
                flexBasis: { xs: "100%", sm: "20%" },
                marginTop: { xs: "20px", sm: "0" },
                padding: { xs: "16px", sm: "0" },
              }}
              variant="text"
              loading={loading}
              type="submit"
            >
              Shorten It!
            </CustomLoadingButton>
            <FormHelperText id="shorten-error">
              <Typography
                variant="error"
                color={theme.palette.secondary.main}
                sx={{ visibility: errorInput ? "visible" : "hidden" }}
              >
                {" "}
                Please insert a link
              </Typography>
            </FormHelperText>
          </FormControl>
        </ShortenBox>
        {shortenLink &&
          shortenLink.map((item, index) => (
            <ShortenStack direction={{ xs: "column", sm: "row" }} key={index} >
              <Typography
                variant="link"
                color="initial"
                flex="3"
                sx={{
                  width: "100%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.original}
              </Typography>
              <Divider
                width="100%"
                height="150px"
                sx={{ display: { xs: "block", sm: "none" } }}
              />
              <Typography
                variant="link"
                color={theme.palette.primary.main}
                flex="1"
                sx={{ textAlign: "right" }}
              >
                {item.shorten}
              </Typography>
              <PrimaryButton
                sx={{
                  width: { xs: "100%", sm: "120px" },
                  borderRadius: "5px",
                  padding: { xs: "10px", sm: "10px" },
                  "&:focus": { backgroundColor: theme.palette.primary.dark },
                }}
                variant="text"
                flex="0.5"
                onClick={(e) => {
                  copyHandler(e, item.shorten);
                }}
                onFocus={(e) => {
                  e.target.textContent = "Copied";
                }}
                onBlur={(e) => {
                  e.target.textContent = "Copy";
                }}
              >
                Copy
              </PrimaryButton>
            </ShortenStack>
          ))}
      </Box>
    </>
  );
}

export default Shortener;
