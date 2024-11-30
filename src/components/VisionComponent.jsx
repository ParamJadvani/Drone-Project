import React from "react";
import { Box, Typography } from "@mui/material";
import droneImage from "../assets/SectionImage/Business Plan-bro.png"; // Replace with your image path

const VisionComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent", // Transparent background
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, side-by-side on larger screens
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "20px",
          maxWidth: "1200px", // Constrain the overall layout
          width: "100%",
        }}
      >
        {/* Text Content Section (Square with Rounded Corners) */}
        <Box
          sx={{
            width: { xs: "300px", md: "400px" }, // Responsive size
            height: { xs: "300px", md: "400px" }, // Maintain square shape
            borderRadius: "25%", // Rounded corners for unique styling
            border: "2px solid #0047AE",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0px 8px 16px rgba(0,0,0,0.2)", // Subtle shadow
            transition: "all 0.3s ease", // Smooth transition for hover effects
            "&:hover": {
              boxShadow: "0px 12px 24px rgba(0,0,0,0.3)", // Increase shadow on hover
              transform: "scale(1.05)", // Slightly scale up on hover
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#0047AE",
              marginBottom: "20px",
            }}
          >
            OUR VISION
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "#333",
              lineHeight: "1.6",
            }}
          >
            Vymanika Aerospace envisions a future where unmanned aerial vehicles
            seamlessly enhance industries and daily life. We aim to lead in UAV
            innovation, setting new standards and unlocking transformative
            possibilities in aerospace technology. Our goal is to create a more
            efficient, connected world through advanced unmanned aviation
            solutions.
          </Typography>
        </Box>

        {/* Image Section (Square or Rectangle) */}
        <Box
          sx={{
            width: { xs: "300px", md: "400px" }, // Responsive size
            height: { xs: "300px", md: "400px" }, // Maintain square shape
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px", // Slightly rounded corners for rectangle
            overflow: "hidden",
            transition: "transform 0.3s ease", // Smooth transition for image zoom effect
            "&:hover": {
              transform: "scale(1.05)", // Zoom-in effect on hover
            },
          }}
        >
          <Box
            component="img"
            src={droneImage}
            alt="Drone"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensure image fills the container
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default VisionComponent;
