import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
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
import jadu2 from "../assets/Vector2.png";

const AboutUS = () => {
  // Using useTheme to access the theme
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Navbar />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          paddingInline: { lg: "50px", md: "25px", xs: "0px" },
        }}
      >
        <Box>
          {/* About Banner with Content */}
          <Banner
            reverse
            image={AboutUs_Banner}
            contentDiv={
              <Box>
                {/* Title Section */}
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    color: theme.palette.secondary.main,
                    textAlign: "start",
                    fontSize: { xs: "1.7rem", sm: "2rem" },
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
                    textAlign: "justify",
                    fontSize: { xs: "1rem", sm: "1.1rem" },
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
            backgroundimage={jadu2}
            description="Vymanika Aerospace envisions a future where unmanned aerial vehicles seamlessly enhance industries and daily life. We aim to lead in UAV innovation, setting new standards and unlocking transformative possibilities in aerospace technology. Our goal is to create a more efficient, connected world through advanced unmanned aviation solutions."
            reverse
          />

          {/* Innovation Focus Section */}
          <Vision_Section
            title="INNOVATION FOCUS"
            vectorImage={pob}
            backgroundimage={jadu}
            description="At Vymanika Aerospace's mission is to advance the aerospace industry with innovative unmanned aerial vehicles (UAVs) and components. We are dedicated to delivering high-performance, reliable solutions that enhance UAV capabilities, meet diverse industry needs, and drive the future of unmanned aviation for a safer, more connected world."
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutUS;
