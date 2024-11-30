import React from "react";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#D4E8FF", // Global background color
    },
    secondary: {
      main: "#0047AE",
    },
    primary: {
      main: "#172831", // Navbar and footer background color
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#D4E8FF", // Apply background color globally
        },
      },
    },
  },
});

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
