// Import necessary MUI components and hooks
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
        gap: theme.spacing(2), // Use theme spacing system
        p: { xs: 2, sm: 3, lg: 4 }, // Responsive padding
        minHeight: "70vh",
        width: "100%",
      }}
    >
      {/* Title Section */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#0047AE", // Custom color
          fontWeight: 900,
          fontStyle: "capitalize",
          mb: theme.spacing(5), // Margin bottom using theme
          fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.5rem" },
        }}
      >
        {title}
      </Typography>

      {/* Main Content Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: reverse ? "row-reverse" : "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 2, lg: 4 }, // Adjusted gap
          width: "100%",
        }}
      >
        {/* Left Image Section */}
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

        {/* Right Section with Background and Description */}
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
          {/* Background Image */}
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

          {/* Overlay Description */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: theme.palette.background.paper, // Use theme for background color
              padding: { xs: "1rem", sm: "1.5rem" }, // Responsive padding
              borderRadius: "8px",
              textAlign: "center",
              color: theme.palette.text.primary,
              width: "90%",
              maxWidth: "500px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", lg: "1.1rem" },
                fontWeight: 500,
                lineHeight: 1.6,
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
