import React from "react";
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
              padding: "1.5rem",
              borderRadius: "8px",
              textAlign: "justify",
              color: theme.palette.text.primary, // Use the theme text color
              width: "100%", // Take full width of the image
              maxWidth: "500px",
              px: { xs: 2, sm: 3, lg: 4 }, // Inline padding for left and right on different screen sizes
              py: { xs: 10, sm: 20, lg: 25 },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size
                fontWeight: 500,
                lineHeight: 1.5,
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
