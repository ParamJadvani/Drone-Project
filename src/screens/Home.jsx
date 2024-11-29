import React from "react";
import {
  Box,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Vision_Section from "../components/Vision_Section";
import OMV from "../assets/OUR-MISSION-VECTOR.png";
import jadu from "../assets/jadu.png";
import Banner from "../components/Banner";
import bannerimage from "../assets/Drone race-bro.png";
import vsrp from "../assets/Vision statement-rafiki.png";

// Create a theme with custom font family
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif", // Use Poppins font for better visual
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#D4E8FF", // Apply background color
          borderRadius: 2, // Optional: adds rounded corners
        }}
      >
        <Navbar />

        {/* Banner Section with Background Color */}
        <Banner
          image={bannerimage}
          contentDiv={
            <Box>
              {/* Title Section */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#0047AE",
                  textAlign: "center", // Centered text for all screen sizes
                }}
              >
                Innovating the Future of UAV Technology
              </Typography>

              {/* Subtitle Section */}
              <Typography
                variant="subtitle1"
                sx={{
                  marginTop: 2,
                  fontStyle: "italic",
                  color: "#000000",
                  fontWeight: 700,
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                “Shaping the Future of Aerospace with Cutting-Edge UAV
                Solutions”
              </Typography>

              {/* Body Description */}
              <Typography
                variant="body1"
                sx={{
                  marginTop: 2,
                  color: "#000000",
                  textAlign: "justify", // Justified text for all screen sizes
                }}
              >
                At Vymanika Aerospace, we deliver innovative UAV technology,
                advancing aviation with unparalleled reliability and efficiency
                for commercial, defense, and beyond. Explore the limitless
                possibilities with us.
              </Typography>

              {/* Button Container with Centering */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center", // Center the button horizontally
                  alignItems: "center", // Align the button vertically
                  marginTop: 3,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#1E40AF",
                    "&:hover": {
                      backgroundColor: "#1D4ED8",
                    },
                    padding: "10px 20px",
                    textTransform: "none",
                  }}
                >
                  Know More
                </Button>
              </Box>
            </Box>
          }
        />

        {/* Vision Section */}
        <Vision_Section
          title="Our Mission"
          vectorImage={OMV}
          backgroundimage={jadu}
          description="At Vymanika Aerospace's mission is to advance the aerospace industry with innovative unmanned aerial vehicles (UAVs) and components. We are dedicated to delivering high-performance, reliable solutions that enhance UAV capabilities, meet diverse industry needs, and drive the future of unmanned aviation for a safer, more connected world."
        />
        <Vision_Section
          title="Our Vision"
          vectorImage={vsrp}
          backgroundimage={jadu}
          description="Vymanika Aerospace envisions a future where unmanned aerial vehicles seamlessly enhance industries and daily life. We aim to lead in UAV innovation, setting new standards and unlocking transformative possibilities in aerospace technology. Our goal is to create a more efficient, connected world through advanced unmanned aviation solutions."
          reverse={true}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
