import { Link } from "react-router-dom";
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
import {
  Menu as MenuIcon,
  Home,
  Info,
  Build,
  School,
  Email,
  Book,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/LOGO.png";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/training", label: "Training" },
    { to: "/contact", label: "Contact Us" },
    { to: "/knowledge", label: "Knowledge" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const hoverEffect = {
    scale: 1.1,
    boxShadow: "0px 5px 15px rgba(0, 71, 174, 1)",
    transition: { duration: 0.3 },
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#17231",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Container maxWidth="xl">
        <motion.div initial="hidden" animate="visible" variants={navVariants}>
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
                    }}
                  >
                    {item.icon}
                    <Link
                      to={item.to}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            ) : (
              // Mobile Menu
              <>
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
                      >
                        {item.icon} {item.label}
                      </motion.div>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Toolbar>
        </motion.div>
      </Container>
    </AppBar>
  );
};

export default Navbar;
