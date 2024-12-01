import React from "react";
import { Box, Typography, Button, Grid, useTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import Vision_Section from "../components/Vision_Section";
import Banner from "../components/Banner";
import Footer from "../components/Footer/Footer";
import ResponsiveCard from "../components/ResponsiveCard";
import OMV from "../assets/SectionImage/Business Plan-bro.png";
import jadu from "../assets/Vector.png";
import bannerimage from "../assets/BannerImage/Home.png";
import vsrp from "../assets/SectionImage/Vision statement-rafiki.png";
import drone_delivery from "../assets/CardImage/drone-delivery.png";
import support from "../assets/CardImage/support.png";
import drone from "../assets/CardImage/drone.png";

const Home = () => {
  const theme = useTheme(); // Access theme for consistent colors and typography
  console.log(theme.palette.secondary.main)

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        borderRadius: 2,
      }}
    >
      <Navbar />

      {/* Banner Section */}
      <Banner
        image={bannerimage}
        contentDiv={
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                color: theme.palette.secondary.main,
                textAlign: "center",
              }}
            >
              Innovating the Future of UAV Technology
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                marginTop: 2,
                fontStyle: "italic",
                color: theme.palette.text.primary,
                fontWeight: 700,
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              “Shaping the Future of Aerospace with Cutting-Edge UAV Solutions”
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                color: theme.palette.text.primary,
                textAlign: "justify",
              }}
            >
              At Vymanika Aerospace, we deliver innovative UAV technology,
              advancing aviation with unparalleled reliability and efficiency
              for commercial, defense, and beyond. Explore the limitless
              possibilities with us.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0047AE",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
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

      {/* Responsive Cards in Grid */}
      <Box sx={{ padding: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            textAlign: "center",
            marginBottom: 9,
            color: theme.palette.secondary.main,
          }}
        >
          Our Services
        </Typography>
        <Grid container spacing={3} mb={10}>
          <Grid item xs={12} sm={6} md={4}>
            <ResponsiveCard
              image={drone_delivery}
              title="Drone Show"
              description="Drone Shows are synchronized aerial displays using drones to create visuals, replacing traditional firework for entertainment and awareness."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ResponsiveCard
              image={support}
              title="Surveying & Mapping"
              description="Drone surveying provides accurate data faster mapping, improved safety, and 3D models, revolutionizing land and construction surveying processes."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ResponsiveCard
              image={drone}
              title="Agriculture Spraying"
              description="Agriculture drones ensure efficient crop spraying, reducing pesticide use, improving precision, saving time, and covering larger areas effectively."
            />
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
