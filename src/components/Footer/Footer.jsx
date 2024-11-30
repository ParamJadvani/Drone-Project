import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import logo from "../../assets/LOGO.png";
import SocialIcons from "./SocialIcons";
import Section from "./Section";
import { Link } from "react-router-dom";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#172831",
        py: 4,
        color: "white",
        mt: 6, // Add top margin for spacing
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          justifyContent: "space-between", // Adjust content distribution
        }}
      >
        {/* Section 1: Logo, Tagline, Social Icons */}
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center", // Center text for better alignment
            px: 4,
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Vymanika Aerospace Logo"
            sx={{
              width: { xs: "120px", sm: "150px" },
              height: "auto",
              mb: 2,
            }}
          />

          {/* Tagline */}
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              lineHeight: "1.4",
              textAlign: "center",
              mb: 2,
              letterSpacing: 1.2,
            }}
          >
            "Soaring Beyond Limits, Crafting the Future of Aviation – Vymanika
            Aerospace"
          </Typography>

          {/* Social Media Icons */}
          <SocialIcons />
        </Grid>

        {/* Section 2: Pages Links */}
        <Grid item xs={12} md={6} lg={3}>
          <Section
            title="Pages"
            content={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  marginTop: 2,
                }}
              >
                <Link
                  to="#"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: 500,
                    borderRadius: "4px",
                    width: "100%",
                  }}
                >
                  About Us
                </Link>

                <Link
                  to="#"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: 500,
                    borderRadius: "4px",
                    width: "100%",
                  }}
                >
                  Services
                </Link>

                <Link
                  to="#"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: 500,
                    borderRadius: "4px",
                    width: "100%",
                  }}
                >
                  Training
                </Link>

                <Link
                  to="#"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: 500,
                    borderRadius: "4px",
                    width: "100%",
                  }}
                >
                  Knowledge
                </Link>
              </Box>
            }
          />
        </Grid>

        {/* Section 3: Our Services */}
        <Grid item xs={12} md={6} lg={3}>
          <Section
            title="Our Services"
            content={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "14px", sm: "17px" },
                    color: "white",
                    lineHeight: 1.5,
                    "&:hover": {
                      color: "#D4E8FF", // Light color on hover
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Drone Show
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "14px", sm: "17px" },
                    color: "white",
                    lineHeight: 1.5,
                    "&:hover": {
                      color: "#D4E8FF",
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Surveying & Mapping
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "14px", sm: "17px" },
                    color: "white",
                    lineHeight: 1.5,
                    "&:hover": {
                      color: "#D4E8FF",
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Agriculture Spraying
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "14px", sm: "17px" },
                    color: "white",
                    lineHeight: 1.5,
                    "&:hover": {
                      color: "#D4E8FF",
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Wind Turbine Inspection
                </Typography>
              </Box>
            }
          />
        </Grid>

        {/* Section 4: Contact Info */}
        <Grid item xs={12} md={6} lg={3}>
          <Section
            title="Contact Info"
            isContact={true}
            content={[
              { icon: <Phone color="inherit" />, text: "+91 89053 65128" },
              {
                icon: <Email color="inherit" />,
                text: "vyamicaaerospace@gmail.com",
              },
              {
                icon: <LocationOn color="inherit" />,
                text: "204, Royal Business Hub, Variyav Road, Surat",
              },
            ]}
          />
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ borderColor: "white", my: 4 }} />

      {/* Copyright */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body1" sx={{ fontsize: "25px", color: "white" ,fontWeight:500 }}>
          © 2024 Vymanika Aerospace. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;