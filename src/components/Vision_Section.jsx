// import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const VisionSection = ({
  vectorImage,
  title,
  description,
  backgroundimage,
  reverse = false,
}) => {
  const theme = useTheme(); // Access the theme from MUI

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2, // Using theme spacing system
        p: { xs: 2, sm: 3, lg: 4 }, // Responsive padding based on screen size
        minHeight: "70vh",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#0047AE",
          fontWeight: 900,
          fontStyle: "capitalize",
          marginBottom: theme.spacing(5),
          fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.5rem" }, // Adjust title size for different screen sizes
        }}
      >
        {title}
      </Typography>

      {/* Content Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: reverse ? "row-reverse" : "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { lg: 2 }, // Using theme spacing for gaps
          width: "100%",
        }}
      >
        {/* Left SVG Background (flipped based on reverse prop) */}
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={vectorImage}
            alt="Vector Illustration"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Right Image and Description */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", lg: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Image */}
          <img
            src={backgroundimage}
            alt="Vision Section"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              objectFit: "cover",
            }}
          />

          {/* Overlayed Description */}
          <Box
  sx={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: { xs: "1rem", sm: "1.5rem" }, // Responsive padding
    borderRadius: "8px",
    textAlign: "justify",
    color: "text.primary", // Use theme's primary text color
    width: "90%", // Take most of the screen width on small screens
    maxWidth: "500px", // Maximum width for larger screens
    px: { xs: 2, sm: 3, lg: 4 }, // Inline padding on different breakpoints
    py: { xs: 5, sm: 10, lg: 15 }, // Vertical padding for responsiveness
    
  }}
>
  <Typography
    variant="body1"
    sx={{
      fontSize: { xs: "0.9rem", sm: "1rem", lg: "1.1rem" }, // Adjust font size based on screen size
      fontWeight: 500,
      lineHeight: 1.6, // Increase line height for better readability
      textAlign: "center", // Center-align text on smaller screens for better readability
    }}
  >
    {description}
  </Typography>
</Box>

        </Box>
      </Box>
    </Box>
  );
};

export default VisionSection;
