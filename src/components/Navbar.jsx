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
        px: { xs: 2, sm: 3, md: 5 }, // Adjust padding for responsiveness
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
                    width: "auto",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: theme.palette.secondary.main, // Hover color from theme
                      backgroundColor: "rgba(96, 165, 250, 0.1)", // Light blue background on hover
                    },
                  }}
                >
                  {item.icon}
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
                    backgroundColor: theme.palette.primary.main, // Use primary color from theme
                    borderRadius: "8px",
                  },
                  "& .MuiMenuItem-root": {
                    color: "white",
                    fontSize: "0.9rem",
                    "&:hover": {
                      backgroundColor: "rgba(96, 165, 250, 0.1)",
                      color: theme.palette.secondary.main, // Hover color from theme
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
