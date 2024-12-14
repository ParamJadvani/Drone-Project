// src/components/SocialIcons.js
import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const SocialIcons = () => {
  const theme = useTheme(); // Access theme for consistent styling

  // Shared IconButton styles using theme
  const iconButtonStyles = {
    color: theme.palette.common.white, // Use theme's white color
    "&:hover": {
      color: theme.palette.secondary.main, // Use theme's secondary color for hover
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: 2, // Gap between icons
        marginTop: 2,
      }}
    >
      <IconButton component="a" href="#" sx={iconButtonStyles}>
        <FaTwitterSquare size={24} />
      </IconButton>

      <IconButton component="a" href="#" sx={iconButtonStyles}>
        <FaLinkedin size={24} />
      </IconButton>

      <IconButton component="a" href="#" sx={iconButtonStyles}>
        <FaInstagramSquare size={24} />
      </IconButton>

      <IconButton component="a" href="#" sx={iconButtonStyles}>
        <FaFacebookSquare size={24} />
      </IconButton>
    </Box>
  );
};

export default SocialIcons;
