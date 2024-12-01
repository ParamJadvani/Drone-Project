import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import Banner from "../components/Banner";
import cap from "../assets/BannerImage/Training.png";
import cb from "../assets/SectionImage/Certification-bro.png";
import Footer from "../components/Footer/Footer";
import ResponsiveCard from "../components/ResponsiveCard";
import certificate from "../assets/CardImage/winner.png";
import mapping from "../assets/CardImage/mapping.png";
import drone_1 from "../assets/CardImage/drone (1).png";
import samrtFarm from "../assets/CardImage/smart-farm.png";
import pilot from "../assets/CardImage/pilot.png";

const trainingData = [
  {
    title: "DGCA Certified Remote Pilot Certificate (RPC)",
    description:
      "Get certified by DGCA with hands-on training to become a licensed drone operator. Learn safety protocols, legal requirements, and technical skills to excel in UAV operations.",
    icon: certificate,
  },
  {
    title: "Agriculture Spraying: Fertilizer/Pesticide Application",
    description:
      "Specialized training to use drones for efficient and precise agricultural spraying, ensuring better crop yields and reduced waste.",
    icon: mapping,
  },
  {
    title: "Aerial Mapping and Land Surveying",
    description:
      "Master drone-based surveying techniques for accurate land analysis and mapping, crucial for construction, agriculture, and environmental projects.",
    icon: drone_1,
  },
  {
    title: "Data Processing for Crop Monitoring & Precision Agriculture",
    description:
      "Learn how to collect and process drone data to optimize agricultural practices, monitor crop health, and implement precision farming techniques.",
    icon: samrtFarm,
  },
  {
    title: "Photography & Videography",
    description:
      "Develop advanced skills in drone-based photography and videography to create stunning visuals for events, real estate, and media production.",
    icon: pilot,
  },
];

const Training = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Container sx={{ paddingTop: { xs: 4, sm: 6 }, paddingBottom: 6 }}>
        {/* Banner Section */}
        <Banner
          reverse={true}
          image={cap}
          contentDiv={
            <Box sx={{ paddingBottom: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  color: "#0047AE",
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                  marginBottom: 3,
                  textAlign: "center",
                }}
              >
                Training Programs Overview
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 400,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.6,
                  textAlign: "justify",
                  maxWidth: { xs: "100%", sm: "90%" },
                  marginX: "auto",
                }}
              >
                Vymanika Aerospace offers comprehensive drone training programs
                designed to equip participants with the skills and
                certifications required for excelling in the UAV industry. From
                mastering agricultural spraying techniques to creating stunning
                aerial photography, our courses cater to both beginners and
                experienced professionals.
              </Typography>
            </Box>
          }
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
              fontStyle: "capitalized",
            }}
          >
            Course Categories
          </Typography>

          <Grid
            container
            spacing={3}
            mb={10}
            sx={{
              justifyContent:
                trainingData.length % 3 === 1 || trainingData.length % 3 === 2
                  ? "center"
                  : "flex-start",
            }}
          >
            {trainingData.map(
              ({ icon, title: t_text, description: d_text }, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{
                    marginInline: { lg: -4, md: -1 },
                  }}
                >
                  <ResponsiveCard
                    image={icon}
                    title={t_text}
                    description={d_text}
                    b_height={380}
                    t_height={90}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>

        {/* Certification */}
        <Banner
          image={cb}
          contentDiv={
            <Box sx={{ paddingBottom: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  color: "#0047AE",
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                  marginBottom: 3,
                  textAlign: "center",
                }}
              >
                CERTIFICATION
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.6,
                  textAlign: "center",
                  maxWidth: { xs: "100%", sm: "80%" },
                  marginX: "auto",
                }}
              >
                Participants receive industry-recognized certifications upon
                successful completion of their training, including
                DGCA-certified Remote Pilot Certificates.
              </Typography>
            </Box>
          }
        />
      </Container>
      <Footer />
    </Box>
  );
};

export default Training;
