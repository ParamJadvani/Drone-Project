import React from "react";
import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import logo from "../../assets/LOGO.png";
import SocialIcons from "./SocialIcons";
import Section from "./Section";
import { Link } from "react-router-dom";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        paddingBottom: "15px",
      }}
    >
      <Box
        sx={{
          // py: { xs: 3, sm: 4, md: 6 },
          // paddingInline: { xs: 2, sm: 4, md: 6 },
          width: "100%",
          backgroundColor: theme.palette.primary.main, // Use primary color from theme
          py: 4,
          color: theme.palette.common.white,
          mt: 6, // Use white color from theme
          paddingInline: { lg: "100px", md: "50px", xs: "0px" }, // Add 150px padding inline (left and right)
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "flex-start",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Logo and Social Icons */}
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              src={logo}
              alt="Vymanika Aerospace Logo"
              sx={{
                width: { xs: "100px", sm: "150px" },
                height: "auto",
                mx: { xs: "auto", md: "0" },
                mb: 2,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                lineHeight: 1.5,
                mb: 2,
                letterSpacing: 1.2,
              }}
            >
              "Soaring Beyond Limits, Crafting the Future of Aviation – Vymanika
              Aerospace"
            </Typography>
            <SocialIcons />
          </Grid>

          {/* Pages Links */}
          <Grid item xs={12} md={3}>
            <Section
              title="Pages"
              content={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  {["About Us", "Services", "Training", "Knowledge"].map(
                    (page, idx) => (
                      <Link
                        key={idx}
                        to={`/${page.toLowerCase().replace(/\s+/g, "")}`}
                        style={{
                          color: theme.palette.common.white,
                          textDecoration: "none",
                          fontSize: "16px",
                          fontWeight: 500,
                          transition: "color 0.3s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = theme.palette.secondary.main)
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = theme.palette.common.white)
                        }
                      >
                        {page}
                      </Link>
                    )
                  )}
                </Box>
              }
            />
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={3}>
            <Section
              title="Our Services"
              content={[
                "Drone Show",
                "Surveying & Mapping",
                "Agriculture Spraying",
                "Wind Turbine Inspection",
              ].map((service, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    color: theme.palette.common.white,
                    lineHeight: 1.5,
                    "&:hover": {
                      color: theme.palette.secondary.main,
                      cursor: "pointer",
                    },
                  }}
                >
                  {service}
                </Typography>
              ))}
            />
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Section
              title="Contact Info"
              isContact={true}
              content={[
                { icon: <Phone />, text: "+91 89053 65128" },
                { icon: <Email />, text: "vyamicaaerospace@gmail.com" },
                {
                  icon: <LocationOn />,
                  text: "204, Royal Business Hub, Variyav Road, Surat",
                },
              ]}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Divider */}
      <Divider sx={{ borderColor: theme.palette.common.white, my: 4 }} />

      {/* Footer Bottom */}
      <Box sx={{ textAlign: "center", py: 2 }}>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            color: theme.palette.common.white,
          }}
        >
          © 2024 Vymanika Aerospace. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
