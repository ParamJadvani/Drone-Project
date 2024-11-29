import React from "react";
import { Box, Typography } from "@mui/material";

const VisionSection = ({
  vectorImage,
  title,
  description,
  backgroundimage,
  reverse = false,
}) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        padding: "2rem",
        minHeight: "70vh",
        backgroundColor: "#D4E8FF",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "#0047AE",
          fontWeight: 600,
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
          gap: { lg: "2rem" },
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
              color: "black",
              maxWidth: "90%",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Font size responsive
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
