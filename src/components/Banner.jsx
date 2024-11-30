import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Banner = ({ image, contentDiv, title = null, reverse = false }) => {
  const theme = useTheme(); // Access theme for consistent styling
  return (
    <Box
      sx={{
        gap: theme.spacing(4), // Responsive gap
        padding: theme.spacing(3, 2), // Top-bottom and left-right padding
        minHeight: { sm: "auto", md: "70vh", lg: "80vh" }, // Responsive minimum height
      }}
    >
      {/* Title Section */}
      {title && (
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900, // Use theme-defined font weight
            color: "#0047AE", // Title color from theme
            textAlign: { sm: "center" }, // Center on small screens
            marginBottom: theme.spacing(4), // Theme-based margin
            fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.5rem" }, // Smaller font on xs and sm
          }}
        >
          {title}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column", // Reverse order on extra small screens (image first)
            sm: "column", // Same behavior for small screens
            lg: reverse ? "row-reverse" : "row", // Reverse layout on large screens if specified
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" }, // Full width on smaller screens, half on larger screens
            display: "flex",
            justifyContent: "center",
            paddingY: theme.spacing(4), // Vertical padding for spacing
          }}
        >
          <img
            src={image}
            alt="Banner"
            style={{
              maxWidth: "100%",
              objectFit: "contain", // Scale the image proportionally
              height: "auto",
            }}
          />
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" }, // Full width on smaller screens, half on larger screens
            paddingX: theme.spacing(4), // Horizontal padding
          }}
        >
          {contentDiv}
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
