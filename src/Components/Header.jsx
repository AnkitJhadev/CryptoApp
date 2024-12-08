import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
  } from "@mui/material"; // Updated import
  import { createTheme, ThemeProvider } from "@mui/material/styles"; // Updated import
  import { makeStyles } from "@mui/styles"; // Separate import for makeStyles
  import { useState } from "react";
  
  const useStyles = makeStyles(() => ({
    title: {
      flex: 1,
      color: "gold",
    },
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark", // Updated for v5, use 'mode' instead of 'type'
    },
  });
  
  function Header() {
    const classes = useStyles();
    const [currency, setCurrency] = useState("USD"); // Added missing state
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Crypto Hunter
              </Typography>
              <Select
                variant="outlined"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                style={{ width: 100, height: 40, marginLeft: 15 }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;
  