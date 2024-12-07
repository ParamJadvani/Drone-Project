// import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import droneImage from "../assets/SectionImage/Business Plan-bro.png"; // Replace with your image path

const VisionComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent", // Transparent background
        padding: "40px 20px", // Adjust padding
      }}
    >
      {/* "OUR VISION" Text outside the box */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#0047AE",
          marginBottom: "20px",
          textAlign: "center", // Center the title
        }}
      >
        OUR VISION
      </Typography>

      {/* Content section with Grid for responsiveness */}
      <Grid
        container
        spacing={4} // Add spacing between columns
        sx={{
          maxWidth: "1200px",
          width: "100%",
          justifyContent: "center", // Center the content
        }}
      >
        {/* Text Content Section (Square with Rounded Corners) */}
        <Grid
          item
          xs={12} md={6} // Full width on mobile, half on desktop
        >
          <Box
            sx={{
              width: "100%", 
              height: "100%", 
              borderRadius: "25%",
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
        </Grid>

        {/* Image Section (Square or Rectangle) */}
        <Grid
          item
          xs={12} md={6} // Full width on mobile, half on desktop
        >
          <Box
            sx={{
              width: "100%", 
              height: "100%",
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default VisionComponent;
