// src/components/SocialIcons.js
import React from "react";
import { Box, IconButton } from "@mui/material";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2, // Adjust gap as per design needs
        marginTop: 2,
      }}
    >
      <IconButton
        component="a"
        href="#"
        sx={{
          color: "white",
          "&:hover": { color: "#D4E8FF" },
        }}
      >
        <FaTwitterSquare size={24} />
      </IconButton>

      <IconButton
        component="a"
        href="#"
        sx={{
          color: "white",
          "&:hover": { color: "#D4E8FF" },
        }}
      >
        <FaLinkedin size={24} />
      </IconButton>

      <IconButton
        component="a"
        href="#"
        sx={{
          color: "white",
          "&:hover": { color: "#D4E8FF" },
        }}
      >
        <FaInstagramSquare size={24} />
      </IconButton>

      <IconButton
        component="a"
        href="#"
        sx={{
          color: "white",
          "&:hover": { color: "#D4E8FF" },
        }}
      >
        <FaFacebookSquare size={24} />
      </IconButton>
    </Box>
  );
};

export default SocialIcons;
