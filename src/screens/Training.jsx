import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, Container, useTheme } from "@mui/material";
import Banner from "../components/Banner";
import cap from "../assets/BannerImage/Training.png";
import cb from "../assets/SectionImage/Certification-bro.png";
import Footer from "../components/Footer/Footer";

const Training = () => {
  // Access the theme with useTheme
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
              {/* Title Section */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  color: "#0047AE",
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                  marginBottom: 3,
                  textAlign: "center", // This ensures the title is always centered
                }}
              >
                Training Programs Overview
              </Typography>

              {/* Body Description */}
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 400,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.6,
                  textAlign: "justify", // This ensures the body text is always justified
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

        {/* Certification */}
        <Banner
          image={cb}
          contentDiv={
            <Box sx={{ paddingBottom: 4 }}>
              {/* Title Section */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  color: "#0047AE",
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                  marginBottom: 3,
                  textAlign: "center", // This ensures the title is always centered
                }}
              >
                CERTIFICATION
              </Typography>

              {/* Body Description */}
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.6,
                  textAlign: "center", // This ensures the body text is always justified
                  maxWidth: { xs: "100%", sm: "80%", lg: "190%" },
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
