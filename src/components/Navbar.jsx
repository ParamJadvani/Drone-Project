import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/LOGO.png";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/training", label: "Training" },
    { to: "/contact", label: "Contact Us" },
    { to: "/knowledge", label: "Knowledge" },
  ];

  const hoverEffect = {
    scale: 1.1,
    boxShadow: "0px 5px 15px rgba(0, 71, 174, 1)",
    transition: { duration: 0.3 },
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#172831",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Container maxWidth="xl">
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
            // Mobile Menu - Drawer
            <>
              <IconButton sx={{ color: "white" }} onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    width: 250,
                    backgroundColor: "#172831",
                    color: "white",
                  },
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <IconButton
                    sx={{ alignSelf: "flex-end", color: "white" }}
                    onClick={toggleDrawer(false)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <List>
                    {menuItems.map((item, index) => (
                      <ListItem
                        key={index}
                        button
                        component={Link}
                        to={item.to}
                        onClick={toggleDrawer(false)}
                      >
                        <motion.div
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <ListItemText primary={item.label} />
                        </motion.div>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
