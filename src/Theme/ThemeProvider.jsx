import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: { main: "rgba(18, 47, 70, 1)" },
    secondary: { main: "rgba(70, 41, 18, 1)" },
    error: { main: "rgba(220, 27, 36, 1)" },
    // Custom Colors (using `augmentColor` for valid MUI palette keys)
    customColors: {
      black80: { main: "rgba(0, 0, 0, 0.8)" },
      burntSienna: { main: "rgba(227, 112, 75, 1)" },
      chateauGreen: { main: "rgba(62, 147, 92, 1)" },
      cranberry: { main: "rgba(222, 95, 125, 1)" },
      ronchi: { main: "rgba(237, 209, 66, 1)" },
      wedgewood: { main: "rgba(84, 126, 174, 1)" },
      wildBlueYonder: { main: "rgba(130, 126, 178, 1)" },
      bayOfMany: { main: "rgba(46, 49, 146, 1)" },
      black15: { main: "rgba(0, 0, 0, 0.15)" },
      endeavour: { main: "rgba(0, 87, 165, 1)" },
      gallery90: { main: "rgba(238, 238, 238, 0.9)" },
      red: { main: "rgba(255, 0, 0, 1)" },
      white: { main: "rgba(255, 255, 255, 1)" },
      white70: { main: "rgba(255, 255, 255, 0.7)" },
    },
  },
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
    h1: { fontSize: "103px", fontWeight: 300, letterSpacing: "-1.545px" },
    h2: { fontSize: "64px", fontWeight: 300, letterSpacing: "-0.32px" },
    h3: { fontSize: "40px", fontWeight: 700 },
    h4: { fontSize: "32px", fontWeight: 700, letterSpacing: "0.64px" },
    h5: { fontSize: "28px", fontWeight: 700 },
    h6: { fontSize: "24px", fontWeight: 400, letterSpacing: "0.48px" },
    subtitle1: { fontSize: "17px", fontWeight: 500 },
    body1: { fontSize: "17px", fontWeight: 400 },
    body2: { fontSize: "15px", fontWeight: 400 },
    button: { fontSize: "14px", fontWeight: 500 },
    caption: { fontSize: "12px", fontWeight: 400 },
    overline: { fontSize: "10px", fontWeight: 400 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "17px",
          fontWeight: 300,
        },
        head: {
          fontSize: "17px",
          fontWeight: 500,
        },
        body: {
          fontSize: "17px",
          fontWeight: 400,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "64px",
          fontWeight: 300,
        },
        secondary: {
          fontSize: "17px",
          fontWeight: 400,
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={appTheme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
