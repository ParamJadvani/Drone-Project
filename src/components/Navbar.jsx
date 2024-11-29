import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Box,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home,
  Info,
  Build,
  School,
  Email,
  Book,
} from "@mui/icons-material";
import logo from "../assets/LOGO.png";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuItems = [
    { to: "/", label: "Home", icon: <Home /> },
    { to: "/about", label: "About Us", icon: <Info /> },
    { to: "/services", label: "Services", icon: <Build /> },
    { to: "/training", label: "Training", icon: <School /> },
    { to: "/contact", label: "Contact Us", icon: <Email /> },
    { to: "/knowledge", label: "Knowledge", icon: <Book /> },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#172831",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        px: "10%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </Link>

          {/* Desktop Menu */}
          {matches ? (
            <Box sx={{ display: "flex", gap: 3 }}>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    textDecoration: "none",
                    gap: "0.5rem",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    padding: "5px",
                    borderRadius: "5px",
                    width: "auto", // Ensures that width adjusts based on content
                  }}
                  // onMouseEnter={(e) => {
                  //   // Apply hover effect on the entire box (icon + text)
                  //   e.target.style.color = "#60A5FA";
                  //   e.target.style.transform = "scale(1.05)"; // Slight zoom
                  //   e.target.style.backgroundColor = "rgba(96, 165, 250, 0.1)"; // Light blue background on hover
                  // }}
                  // onMouseLeave={(e) => {
                  //   // Remove hover effect
                  //   e.target.style.color = "white";
                  //   e.target.style.transform = "scale(1)";
                  //   e.target.style.backgroundColor = "transparent"; // Reset background color
                  // }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "0.8rem",
                    }}
                  >
                    {item.icon}
                  </Box>
                  {item.label}
                </Link>
              ))}
            </Box>
          ) : (
            // Mobile Menu
            <div>
              <IconButton sx={{ color: "white" }} onClick={handleMenuClick}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
                sx={{
                  "& .MuiMenu-paper": {
                    backgroundColor: "#172831",
                    borderRadius: "8px",
                  },
                  "& .MuiMenuItem-root": {
                    color: "white",
                    fontSize: "0.9rem",
                    "&:hover": {
                      backgroundColor: "rgba(96, 165, 250, 0.1)",
                      color: "#60A5FA",
                    },
                  },
                }}
              >
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={handleMenuClose}
                    component={Link}
                    to={item.to}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
