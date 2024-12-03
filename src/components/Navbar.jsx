import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon, Home, Info, Build, School, Email, Book } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/LOGO.png";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Get the current location
  const location = useLocation();

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

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverEffect = {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 1.2, type: "spring", stiffness: 300 },
  };

  const soldEffect = {
    scale: 1.1,
    color: theme.palette.secondary.main,
    transition: { duration: 0.3 },
  };

  const dropdownVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#172831",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <motion.img
                src={logo}
                alt="Logo"
                style={{ height: "40px" }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>

            {/* Desktop Menu */}
            {matches ? (
              <Box sx={{ display: "flex", gap: 3 }}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={menuItemVariants}
                    whileHover={hoverEffect}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "white",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      padding: "5px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      ...(location.pathname === item.to && soldEffect), // Apply sold effect when the route is active
                    }}
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 1.2, type: "spring", stiffness: 300 },
                      }}
                      style={{
                        fontSize: "1.5rem",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    <motion.div
                      style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        paddingLeft: "5px",
                      }}
                    >
                      <Link
                        to={item.to}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </Box>
            ) : (
              // Mobile Menu
              <>
                <IconButton sx={{ color: "white" }} onClick={handleMenuClick}>
                  <MenuIcon />
                </IconButton>
                <motion.div
                  initial="hidden"
                  animate={open ? "visible" : "hidden"}
                  variants={dropdownVariants}
                  style={{ position: "absolute", right: 0, top: 50 }}
                >
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    MenuListProps={{ "aria-labelledby": "basic-button" }}
                    sx={{
                      "& .MuiMenu-paper": {
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: "8px",
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
                        <motion.div
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          whileHover={{
                            scale: 1.05,
                            color: theme.palette.secondary.main,
                            transition: { duration: 0.3 },
                          }}
                          style={{
                            ...(location.pathname === item.to && soldEffect), // Apply sold effect when route is active
                          }}
                        >
                          {item.icon} {item.label}
                        </motion.div>
                      </MenuItem>
                    ))}
                  </Menu>
                </motion.div>
              </>
            )}
          </Toolbar>
        </motion.div>
      </Container>
    </AppBar>
  );
};

export default Navbar;
