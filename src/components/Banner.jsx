import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = ({ image, contentDiv, title = null, reverse = false }) => {
  return (
    <Box
      sx={{
        gap: { sm: 4, md: 6, lg: 8 }, // Responsive gap between content and image
        padding: { sm: 2, md: 4, lg: 6, xl: 8 }, // Responsive padding
        minHeight: { sm: "auto", md: "70vh", lg: "80vh" }, // Minimum height adjustments for responsiveness
      }}
    >
      {/* Title Section */}
      {title && (
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700, // Bold font weight
            color: "#0047AE", // Title color
            textAlign: { sm: "center" }, // Center title on small screens, left-align on larger screens
            marginBottom: { sm: 2, md: 3, lg: 4 }, // Adjust margin for title
            fontSize: { sm: "1.5rem", md: "2rem", lg: "2.5rem" }, // Responsive font size
          }}
        >
          {title}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            sm: "column-reverse", // Ensure image is always on top for medium screens and smaller
            lg: reverse ? "row-reverse" : "row", // Reverse content for larger screens
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Content Section */}
        <Box
          sx={{
            width: "100%",
            lg: { width: "50%" },
            paddingX: { sm: 2, md: 4 },
          }}
        >
          {contentDiv}
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            width: "100%",
            lg: { width: "50%" },
            display: "flex",
            justifyContent: "center",
            paddingY: { sm: 2, md: 4, lg: 0 }, // Adjust vertical padding based on screen size
          }}
        >
          <img
            src={image}
            alt="Banner Image"
            style={{
              maxWidth: "100%",
              objectFit: "contain", // Ensures the image scales without distortion
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
