import React from "react";
import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "../components/Navbar";
import Vision_Section from "../components/Vision_Section";
import AboutUs_Banner from "../assets/BannerImage/Aboutus.png";
import jadu from "../assets/Vector.png";
import OMV from "../assets/SectionImage/Business Plan-bro.png";
import vsr from "../assets/SectionImage/Vision statement-rafiki.png";
import pob from "../assets/SectionImage/Progress overview-bro.png";
import Banner from "../components/Banner";
import scb from "../assets/SectionImage/Stamp collecting-bro.png";
import Footer from "../components/Footer/Footer";

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

const AboutUS = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#D4E8FF", minHeight: "100vh" }}>
        <Navbar />

        <Box sx={{ padding: { xs: 2, sm: 4 } }}>
          {/* About Banner with Content */}
          <Banner
            reverse={true}
            image={AboutUs_Banner}
            contentDiv={
              <Box>
                {/* Title Section */}
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#0047AE",
                    textAlign: "center", // Centered text for all screen sizes
                    fontSize: { xs: "1.8rem", sm: "2.5rem" }, // Responsive font size
                  }}
                >
                  About Vymanika Aerospace
                </Typography>
                {/* Body Description */}
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: 2,
                    color: "#000000",
                    fontWeight: 400,
                    textAlign: "justify", // Justified text for all screen sizes
                    fontSize: { xs: "1rem", sm: "1.1rem" }, // Responsive font size
                  }}
                >
                  Vymanika Aerospace is a pioneering startup redefining the
                  aerospace industry through innovation and expertise in
                  unmanned aerial vehicles (UAVs). Our mission is to
                  revolutionize UAV technology by designing and integrating
                  cutting-edge components tailored for commercial and defense
                  applications. As a forward-thinking company, we are committed
                  to advancing UAV capabilities and meeting the ever-evolving
                  demands of modern aviation and robotics.
                </Typography>
              </Box>
            }
          />

          {/* History Banner */}
          <Banner
            image={scb}
            title="OUR HISTORY AND KEY MILESTONES"
            contentDiv={
              <Box
                sx={{ paddingX: { xs: 2, sm: 4 }, paddingY: { xs: 2, sm: 4 } }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
                    lineHeight: 1.6,
                    color: "#000000",
                    fontWeight: 400,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Since our inception, Vymanika Aerospace has been dedicated to
                  excellence in UAV development. With each breakthrough, we have
                  strengthened our position as a trusted innovator in the
                  aerospace sector, delivering reliable and high-performance
                  solutions to diverse industries.
                </Typography>
              </Box>
            }
          />

          {/* Vision Section */}
          <Vision_Section
            title="OUR VISION"
            vectorImage={OMV}
            backgroundimage={jadu}
            description="Vymanika Aerospace envisions a future where unmanned aerial vehicles seamlessly enhance industries and daily life. We aim to lead in UAV innovation, setting new standards and unlocking transformative possibilities in aerospace technology. Our goal is to create a more efficient, connected world through advanced unmanned aviation solutions."
          />

          {/* Future Vision Section */}
          <Vision_Section
            title="OUR FUTURE"
            vectorImage={vsr}
            backgroundimage={jadu}
            description="Vymanika Aerospace envisions a future where unmanned aerial vehicles seamlessly enhance industries and daily life. We aim to lead in UAV innovation, setting new standards and unlocking transformative possibilities in aerospace technology. Our goal is to create a more efficient, connected world through advanced unmanned aviation solutions."
            reverse={true}
          />

          {/* Innovation Focus Section */}
          <Vision_Section
            title="INNOVATION FOCUS"
            vectorImage={pob}
            backgroundimage={jadu}
            description="At Vymanika Aerospace's mission is to advance the aerospace industry with innovative unmanned aerial vehicles (UAVs) and components. We are dedicated to delivering high-performance, reliable solutions that enhance UAV capabilities, meet diverse industry needs, and drive the future of unmanned aviation for a safer, more connected world."
          />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default AboutUS;
