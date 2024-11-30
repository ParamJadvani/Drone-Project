import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Section = ({ title, content, isContact }) => {
  const theme = useTheme(); // Access theme for consistent styling

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        letterSpacing: 1.2,
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.common.white, // Use theme's white color
          fontWeight: 900,
          textAlign: "left",
          fontSize: { xs: "19px", sm: "21px", md: "23px" },
          mb: 2,
        }}
      >
        {title}
      </Typography>

      {/* Content */}
      <Box
        sx={{
          color: theme.palette.common.white, // Use theme's white color
          textAlign: "left",
          fontSize: { xs: "14px", sm: "16px" },
          "& p": {
            marginBottom: 1,
          },
          "& a": {
            color: theme.palette.common.white, // Use theme's white color
            textDecoration: "none",
            "&:hover": {
              color: theme.palette.secondary.main, // Hover color from theme
              textDecoration: "underline",
            },
          },
        }}
      >
        {isContact ? (
          <>
            {/* Contact Info with Icons */}
            {content.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  marginBottom: 2,
                  fontSize: { xs: "14px", sm: "16px" },
                  "& svg": {
                    fontSize: { xs: "20px", sm: "24px" }, // Icon size
                  },
                  "&:hover": {
                    color: theme.palette.secondary.main, // Hover color from theme
                    cursor: "pointer",
                    textDecoration: "underline",
                  },
                  letterSpacing: 1.2,
                }}
              >
                {item.icon}
                <Typography variant="body2">{item.text}</Typography>
              </Box>
            ))}
          </>
        ) : (
          content
        )}
      </Box>
    </Box>
  );
};

export default Section;
